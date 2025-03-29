"use cleint"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";


interface SeachDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const SearchDialog = ({ open, onOpenChange }: SeachDialogProps) => {
    const categories = useQuery(api.category.getUniqueCategoriesByName);
    const careers = useQuery(api.careers.getAllCareers);
    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <CommandInput className="text-white" placeholder="Type a command or search..." />
            <CommandList className="bg-neutral-950">
                <CommandEmpty className="w-full text-center py-6 text-white ">No results found.</CommandEmpty>
                <CommandGroup heading="Careers">
                    {careers?.map((career) => (
                        <CommandItem key={career._id} asChild className="cursor-pointer">
                            <Link href={`/careers/${career._id}`}>
                                {career.title}
                            </Link>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Categories">
                    {categories?.map((category) => (
                        <CommandItem key={category.name}>{category.name}</CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>

    )
}

export default SearchDialog