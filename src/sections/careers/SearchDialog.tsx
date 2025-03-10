
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"


interface SeachDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const SearchDialog = ({ open, onOpenChange }: SeachDialogProps) => {

    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <CommandInput className="text-white" placeholder="Type a command or search..." />
            <CommandList className="bg-neutral-950">
                <CommandEmpty className="w-full text-center py-6 text-white ">No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>

    )
}

export default SearchDialog