import { Box, Text, Button, Input, IconButton, Flex, Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Bounce, Fade} from 'react-awesome-reveal'
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa'
import useTrelloStore from '../store/Store'

const Hero = () => {
    const { lists, addList, addCard, deleteList, deleteCard, updateCard } = useTrelloStore()
    const [newListTitle, setNewListTitle] = useState('')
    const [newCardContent, setNewCardContent] = useState({})
    const [editMode, setEditMode] = useState({})

    const handleAddCard = (listId) => {
        if (newCardContent[listId]?.trim()) {
            addCard(listId, newCardContent[listId])
            setNewCardContent({ ...newCardContent, [listId]: "" })

        }
    }

    const toggleEditMode = (listId, cardId) => {
        setEditMode((prev) => ({
            ...prev,
            [`${listId}-${cardId}`]: !prev[`${listId}-${cardId}`]
        }))
    }

    const handleUpdateCard = (listId, cardId, content) => {
        updateCard(listId, cardId, content)
        toggleEditMode(listId, cardId)
    }

    const createCard = () => {
        if (newListTitle) {
            addList(newListTitle)
            setNewListTitle('')
        }
        else if (newListTitle === "") {
            const error = TypeError("Maydon bo'sh")
            alert(error)
        }
    }

    return (
        <Box h={'100vh'} p={4}>
            <Fade>

                <Input
                    placeholder="Add new list"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                    mb={4}
                />
            </Fade>
            <Box  w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Bounce >
                    <Button variant={'outline'} colorScheme={'blue'} onClick={createCard}>Add List</Button>
                </Bounce>
            </Box>

            <Box w={'100%'} display={'flex'} justifyContent={'space-around'} alignItems={'start'} flexWrap={'wrap'} mt={4}>
                <Bounce>

                {lists.map(list => (
                    <Box key={list.id} borderWidth="1px" borderRadius="lg" p={4} m={2} width="350px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Text fontSize="xl">{list.title}</Text>
                            <IconButton
                                icon={<FaTrash />}
                                aria-label="Delete List"
                                onClick={() => deleteList(list.id)}
                                size="sm"
                                />
                        </Box>

                        <Box mt={2}>
                            {list.cards.map(card => (
                                <Box
                                key={card.id}
                                p={2}
                                bg="gray.100"
                                mb={2}
                                borderRadius="md"
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                >
                                    <Flex>
                                        {editMode[`${list.id}-${card.id}`] ? (
                                            <Input
                                            value={newCardContent[`${list.id}-${card.id}`] || card.content}
                                            onChange={(e) => setNewCardContent({ ...newCardContent, [`${list.id}-${card.id}`]: e.target.value })}
                                            />
                                            ) : (
                                                <Flex w={'200px'} flexDir={'column'}>
                                                <Text>{card.content}</Text>
                                                <Divider w={'100%'} />
                                                <Text>{card.time}:{card.minut}</Text>
                                            </Flex>
                                        )}
                                    </Flex>

                                    <Box display="flex" alignItems="center">
                                        {editMode[`${list.id}-${card.id}`] ? (
                                            <IconButton
                                            icon={<FaCheck />}
                                            aria-label="Save"
                                            onClick={() => handleUpdateCard(list.id, card.id, newCardContent[`${list.id}-${card.id}`] || card.content)}
                                            size="sm"
                                            ml={2}
                                            />
                                            ) : (
                                                <IconButton
                                                icon={<FaEdit />}
                                                aria-label="Edit"
                                                onClick={() => toggleEditMode(list.id, card.id)}
                                                size="sm"
                                                ml={2}
                                                />
                                                )}

                                        <IconButton
                                            icon={<FaTrash />}
                                            aria-label="Delete Card"
                                            onClick={() => deleteCard(list.id, card.id)}
                                            size="sm"
                                            ml={2}
                                            />
                                    </Box>

                                </Box>
                            ))}
                        </Box>

                        <Input
                            placeholder="Add new task"
                            
                            value={newCardContent[list.id] || ''}
                            onChange={(e) => setNewCardContent({ ...newCardContent, [list.id]: e.target.value })}
                            mt={2}
                            />
                        <Box w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Button variant={'outline'} colorScheme={'blue'} onClick={() => handleAddCard(list.id)} mt={2}>Add Task</Button>
                        </Box>
                        <Box w={'100%'} display={'flex'} justifyContent={'end'} alignItems={'center'}>{list.time}:{list.minut}</Box>
                    </Box>
                ))}
                </Bounce>
            </Box>
        </Box>
    )
}

export default Hero
