"use client"
import { Button } from '@/components/ui/button'

import NewCategory from '@/components/NewCategory'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useMutation, useQuery } from 'convex/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { api } from '../../../../convex/_generated/api'
import { Id } from '../../../../convex/_generated/dataModel'


const AdminPage = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [intro, setIntro] = useState('');
    const [subTitle1, setSubTitle1] = useState('');
    const [description1, setDescription1] = useState('');
    const [subTitle2, setSubTitle2] = useState('');
    const [description2, setDescription2] = useState('');
    const [subTitle3, setSubTitle3] = useState('');
    const [description3, setDescription3] = useState('');
    const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
    const [introImageFile, setIntroImageFile] = useState<File | null>(null);
    const [categoryId, setCategoryId] = useState<Id<"categories">>();
    const [isLoading, setIsLoading] = useState(false);

    const categories = useQuery(api.category.getAllCategories);

    const addCareer = useMutation(api.careers.addCareer);
    const generateUploadUrl = useMutation(api.upload.generateUploadUrl);


    const handleValueChange = (value: Id<"categories">) => {
        setCategoryId(value);
        console.log("Selected Category ID:", value);
    };


    console.log("DATA", {
        title,
        intro,
        categoryId,
        subTitle1,
        description1,
        subTitle2,
        description2,
        subTitle3,
        description3,
        coverImageFile,
        introImageFile
    });


    // const handleSubmit = async () => {
    //     setIsLoading(true);
    //     let coverImageId: Id<"_storage"> | undefined;
    //     let introImageId: Id<"_storage"> | undefined;
    //     try {
    //         if (coverImageFile) {
    //             const url = await generateUploadUrl({});

    //             if (!url) {
    //                 throw new Error("Url not found");
    //             }

    //             const result = await fetch(url, {
    //                 method: "POST",
    //                 headers: { "Content-Type": coverImageFile.type },
    //                 body: coverImageFile,
    //             });
    //             if (!result.ok) {
    //                 throw new Error("Failed to upload image");
    //             }

    //             const { storageId } = await result.json();
    //             coverImageId = storageId;
    //         }


    //         if (introImageFile) {
    //             const url = await generateUploadUrl({});

    //             if (!url) {
    //                 throw new Error("Url not found");
    //             }

    //             const result = await fetch(url, {
    //                 method: "POST",
    //                 headers: { "Content-Type": introImageFile.type },
    //                 body: introImageFile,
    //             });
    //             if (!result.ok) {
    //                 throw new Error("Failed to upload intro image");
    //             }

    //             const { storageId } = await result.json();
    //             introImageId = storageId;
    //         }
    //         console.log("Image IDs:", coverImageId, introImageId);


    //         await addCareer({
    //             title,
    //             introduction: intro,
    //             categoryId: categoryId!,
    //             subTitle1,
    //             description1,
    //             subTitle2,
    //             description2,
    //             subTitle3,
    //             description3,
    //             coverImage: coverImageId || undefined,
    //             introImage: introImageId || undefined,
    //         });

    //         toast.success("Career created successfully!");

    //     } catch (error) {
    //         console.error("Error creating career:", error);
    //         toast.error("Failed to create career");
    //     } finally {
    //         setTitle("");
    //         setIntro("");
    //         setSubTitle1("");
    //         setDescription1("");
    //         setSubTitle2("");
    //         setDescription2("");
    //         setSubTitle3("");
    //         setDescription3("");
    //         setCoverImageFile(null);
    //         setIntroImageFile(null);
    //         setCategoryId(undefined);
    //         setIsLoading(false);
    //     }
    // };

    const handleSubmit = async () => {
        setIsLoading(true);
        let coverImageId;
        let introImageId;

        try {
            if (coverImageFile) {
                const url = await generateUploadUrl({});
                if (!url) throw new Error("Upload URL not found");

                const result = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": coverImageFile.type },
                    body: coverImageFile,
                });

                if (!result.ok) throw new Error("Failed to upload cover image");

                const { storageId } = await result.json();
                coverImageId = storageId;
            }

            if (introImageFile) {
                const url = await generateUploadUrl({});
                if (!url) throw new Error("Upload URL not found");

                const result = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": introImageFile.type },
                    body: introImageFile,
                });

                if (!result.ok) throw new Error("Failed to upload intro image");

                const { storageId } = await result.json();
                introImageId = storageId;
            }

            console.log("Image IDs:", coverImageId, introImageId);

            await addCareer({
                title,
                introduction: intro,
                categoryId: categoryId!,
                subTitle1,
                description1,
                subTitle2,
                description2,
                subTitle3,
                description3,
                coverImage: coverImageId || undefined,
                introImage: introImageId || undefined,
            });

            toast.success("Career created successfully!");

        } catch (error) {
            console.error("Error creating career:", error);
            toast.error(`Failed to create career: ${error}`);
        } finally {
            // Reset form fields
            setTitle("");
            setIntro("");
            setSubTitle1("");
            setDescription1("");
            setSubTitle2("");
            setDescription2("");
            setSubTitle3("");
            setDescription3("");
            setCoverImageFile(null);
            setIntroImageFile(null);
            setCategoryId(undefined);
            setIsLoading(false);
        }
    };


    return (
        <div className='h-full gap-5 w-full flex-col flex items-center  text-2xl font-semibold text-blue-600 mx-auto'>
            Create Career
            <div>
                <Card className="w-[350px] bg-black border-neutral-500">
                    <CardHeader>
                        <CardTitle>Career Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Title <span className='text-red-500'>*</span></Label>
                                    <Input id="name" placeholder="Name of Career" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="intro">Intoduction <span className='text-red-500'>*</span></Label>
                                    <Textarea id="intro" placeholder="Simple introduction of Career" value={intro} onChange={(e) => setIntro(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="categories">Category <span className='text-red-500'>*</span></Label>
                                    <Select onValueChange={handleValueChange}>
                                        <SelectTrigger id="categories">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            {categories?.map((category) => (
                                                <SelectItem key={category._id} value={category._id} >
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                            <NewCategory />

                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="sub-1">Sub Title 1 <span className='text-red-500'>*</span></Label>
                                    <Input id="sub-1" placeholder="Sub Title 1" value={subTitle1} onChange={(e) => setSubTitle1(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="desc-1">Sub Description 1<span className='text-red-500'>*</span></Label>
                                    <Textarea id="desc-1" placeholder="Sub Description 1" value={description1} onChange={(e) => setDescription1(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="sub-2">Sub Title 2 </Label>
                                    <Input id="sub-2" placeholder="Sub Title 2" value={subTitle2} onChange={(e) => setSubTitle2(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="desc-2">Sub Description 2</Label>
                                    <Textarea id="desc-2" placeholder="Sub Description 2" value={description2} onChange={(e) => setDescription2(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="sub-3">Sub Title 3 </Label>
                                    <Input id="sub-3" placeholder="Sub Title 3" value={subTitle3} onChange={(e) => setSubTitle3(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="desc-3">Sub Description 3</Label>
                                    <Textarea id="desc-3" placeholder="Sub Description 3" value={description3} onChange={(e) => setDescription3(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="cover_img">Cover Image</Label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="cover_img" type="file" accept='image/*' onChange={(e) => setCoverImageFile(e.target.files![0])} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="introImage">Introduction Image</Label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="introImage" type="file" accept='image/*' onChange={(e) => setIntroImageFile(e.target.files![0])} />
                                </div>


                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => router.push('/careers')}>Cancel</Button>
                        <Button onClick={() => handleSubmit()} disabled={isLoading}>Create Career</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default AdminPage