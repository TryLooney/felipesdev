"use client";

import { getCategory, getCategoryByHref } from "@/lib/posts";
import { api } from "@/trpc/react";
import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Modal, ModalBody, ModalContent } from "@nextui-org/modal";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";
import { PostCategory } from "@prisma/client";
import { Coins, Plus, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BlogHeader() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const { data: posts } = api.post.search.useQuery(
    { query: searchQuery, category: getCategoryByHref(pathname) },
    { enabled: !!searchQuery },
  );

  useEffect(() => {
    if (
      searchQuery &&
      document.activeElement === document.getElementById("searchInput")
    ) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchQuery]);

  return (
    <header className="flex w-full items-center justify-between">
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-center space-x-4">
          {Object.values(PostCategory).map((category: PostCategory) => {
            const { title, href } = getCategory(category);
            return (
              <BlogHeaderNavbarLink href={href} title={title} key={category} />
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center justify-center space-x-4">
        <Input
          id="searchInput"
          type="text"
          variant="bordered"
          size="sm"
          startContent={<Search className="h-4 w-4" />}
          placeholder="Procurar postagem..."
          onValueChange={setSearchQuery}
          value={searchQuery}
        />
        <div className="flex items-center justify-center">
          <Dropdown
            classNames={{
              content: "bg-background-100 border p-0",
            }}
            showArrow
            placement="bottom-end"
            closeOnSelect={false}
          >
            <DropdownTrigger>
              <Avatar
                showFallback
                as={Button}
                radius="full"
                isIconOnly
                name={session?.user.name ?? ""}
                src={session?.user.image ?? ""}
                fallback={<Skeleton className="h-12 w-12 rounded-full" />}
              />
            </DropdownTrigger>
            <DropdownMenu
              classNames={{
                base: "px-0 py-4",
              }}
              aria-label="Profile Actions"
              disabledKeys={["profile"]}
              variant="flat"
            >
              <DropdownItem
                key="profile"
                className="w-64 rounded-none px-4 py-2 opacity-100"
              >
                <p className="font-semibold">
                  {session?.user.name ?? session?.user.email ?? "User"}
                </p>
                <p className="text-foreground-500">
                  {session?.user.email
                    ? session?.user.email
                    : session?.user.name
                      ? `${session?.user.name}@felipes.dev`
                      : "Email"}
                </p>
              </DropdownItem>
              {session?.user.role === "ADMIN" ||
              session?.user.role === "MODERATOR" ? (
                <DropdownItem
                  key="new"
                  href="/new"
                  className="w-64 rounded-none px-4 py-2 text-foreground-500"
                  endContent={<Plus className="h-4 w-4 text-foreground-500" />}
                >
                  Nova postagem
                </DropdownItem>
              ) : (
                <DropdownItem
                  key="contribute"
                  href="/contribute"
                  className="w-64 rounded-none px-4 py-2 text-foreground-500"
                  endContent={<Coins className="h-4 w-4 text-foreground-500" />}
                >
                  Torne-se um contribuidor
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalContent>
          <ModalBody>
            {(posts?.length ?? 0) > 0 ? (
              <>
                {posts?.map((post, index) => (
                  <div key={index}>
                    <h2>{post.name}</h2>
                    <p>{post.id}</p>
                  </div>
                ))}
              </>
            ) : (
              <p>Carregando...</p>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </header>
  );
}

function BlogHeaderNavbarLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${
          pathname === href ? "text-white" : "text-foreground-500"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <span>{title}</span>
          <div
            className={`h-[2px] w-full rounded-full ${
              pathname === href ? "bg-white" : "bg-transparent"
            }`}
          ></div>
        </div>
      </Link>
    </li>
  );
}
