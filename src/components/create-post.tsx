"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useToast } from "./ui/use-toast";

export function CreatePost() {
  const { toast } = useToast();
  const router = useRouter();
  const [name, setName] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (name === "") return toast({ description: "Please enter a title" });

        await createPost.mutateAsync({ name });
      }}
      className="flex flex-col gap-2"
    >
      <Input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="faded" isLoading={createPost.isLoading}>
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
