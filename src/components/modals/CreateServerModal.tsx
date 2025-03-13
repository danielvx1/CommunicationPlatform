import { Modal, Text, Flex, Stack, Group, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { useForm } from '@mantine/form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import classes from './CreateServerModal.module.css'
import { IconUpload } from '@tabler/icons-react'

function CreateServerModal() {
    const {isOpen, closeModal} = useModal("CreateServer")

    const form = useForm({
        initialValues: {
            name: "",
        },
        validate: {
            name: (value) => !value.trim() && "Name is required.",
        }
    })
    const [imagePreview, setImagePreview] = useState()

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
                                onDrop={() => {}}
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
                    </Flex>
                </Stack>
            </form>
        </Modal>
    )
}

export default CreateServerModal