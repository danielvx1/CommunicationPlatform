import { Modal, Text, Flex, Stack, Group, rem, useMantineColorScheme, useMantineTheme, Button, Image, TextInput } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { useForm } from '@mantine/form'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import classes from './CreateServerModal.module.css'
import { IconUpload, IconX } from '@tabler/icons-react'

function CreateServerModal() {
    const {isOpen, closeModal} = useModal("CreateServer");

    const form = useForm({
        initialValues: {
            name: "",
        },
        validate: {
            name: (value) => !value.trim() && "Name is required.",
        }
    });

    const [imagePreview, setImagePreview] = useState<string | null | undefined>(undefined);

    const { colorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    
    // State to track hover color
    const [bgColor, setBgColor] = useState(
        colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    );

    // Update bgColor when colorScheme changes
    useEffect(() => {
        setBgColor(colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]);
    }, [colorScheme, theme.colors.dark, theme.colors.gray]);

    // Place file in here, send it to the backend
    const [file, setFile] = React.useState<File | null>(null)
    const handleDropzoneChange: DropzoneProps["onDrop"] = (files) => {
        if(files.length === 0) {
            return setImagePreview(null)
        }
        const reader = new FileReader()
        reader.onload = (e) => {
            setImagePreview(e.target?.result as string)
        }
        setFile(files[0])
        reader.readAsDataURL(files[0])
    }
    return (
        <Modal title="Create a server" opened={isOpen} onClose={closeModal}>
            <Text c="dimmed">
                Give your server a name and an image. You can always change it later.
            </Text>
            <form onSubmit={form.onSubmit(() => {})}>
                <Stack>
                    <Flex justify="center" align="center" direction={"column"}>
                        {
                            !imagePreview && <Dropzone
                                onDrop={(files) => {
                                    handleDropzoneChange(files)
                                }}
                                accept={IMAGE_MIME_TYPE}
                                className={classes.dropZone}
                                mt="md"
                                style={{
                                    backgroundColor: bgColor
                                  }}
                                onMouseEnter={() =>
                                    setBgColor(colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[4])
                                }
                                onMouseLeave={() =>
                                    setBgColor(colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3])
                                }
                            >
                                <Group style={{
                                    minHeight: rem(100),
                                    pointerEvents: "none",
                                }} >
                                    <Dropzone.Accept>
                                        <IconUpload size="3.2rem" stroke={1.5} />
                                    </Dropzone.Accept>
                                    <Dropzone.Reject>
                                        <IconUpload size="3.2rem" stroke={1.5} />
                                    </Dropzone.Reject>
                                    <Dropzone.Idle>
                                        <IconUpload size="3.2rem" stroke={1.5} />
                                    </Dropzone.Idle>
                                    <>
                                        <Text size="xl" inline>
                                            Drag images here or click to select files
                                        </Text>
                                        <Text size="sm" c="dimmed" inline mt={7}>
                                            Upload a server icon
                                        </Text>
                                    </>
                                </Group>
                            </Dropzone>
                        }

                        {
                            imagePreview
                            && (
                                <Flex pos="relative" w={rem(150)} h={rem(150)} mt="md">
                                    <>
                                        <Button
                                        onClick={() => setImagePreview(null)}
                                        color="red"
                                        pos="absolute"
                                        style={{
                                            zIndex: 1,borderRadius: "50%",
                                            padding: 0,
                                            width: rem(30),
                                            height: rem(30),
                                            top: 0,
                                            right: 18,
                                        }}
                                        >
                                            <IconX color="white" />
                                        </Button>
                                        <Image
                                        src={imagePreview} w={rem(150)} h={rem(150)} radius={"50%"} />
                                    </>
                                </Flex>
                            )
                        }
                    </Flex>
                    <TextInput label="Server name" placeholder="Enter a server name"
                    {...form.getInputProps("name")}
                    error={form.errors.name}
                    />
                    <Button disabled={!!form.errors.name} w={"30%"} type="submit" variant="gradient" mt="md">
                        Create Server
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}

export default CreateServerModal