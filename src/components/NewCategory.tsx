import { Dialog } from "@radix-ui/react-dialog"
import { useMutation } from "convex/react"
import { useState } from "react"
import { toast } from "sonner"
import { api } from "../../convex/_generated/api"
import { Button } from "./ui/button"
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"

const NewCategory = () => {
    const [open, setOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const addCategory = useMutation(api.category.addCategory);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await addCategory({ name: newCategory });
            setNewCategory("");
            toast.success("Category created successfully!");
        } catch (error) {
            console.error("Error creating category:", error);
            toast.error("Failed to create category");
        } finally {
            setNewCategory("");
            setOpen(false);
        }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className='w-full'>
                <Button>Add new category</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='gap-y-4'>
                    <DialogTitle>Enter the name of category</DialogTitle>
                    <Input placeholder="Enter category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default NewCategory