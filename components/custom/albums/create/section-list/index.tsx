'use client'

import {
    DndContext,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
    type DragEndEvent,
} from '@dnd-kit/core'
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import SectionForm from '../section-form'

import type { AlbumFormState, AlbumSection } from '@/types/album'

type SortableItemProps = {
    section: AlbumSection
    index: number
    total: number
    setAlbum: React.Dispatch<React.SetStateAction<AlbumFormState>>
}

function SortableItem({
    section,
    index,
    setAlbum,
}: SortableItemProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: section.id })

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <SectionForm
                section={section}
                index={index}
                setAlbum={setAlbum}
            />
        </div>
    )
}

type SectionsListProps = {
    album: AlbumFormState
    setAlbum: React.Dispatch<React.SetStateAction<AlbumFormState>>
}

export default function SectionsList({
    album,
    setAlbum,
}: SectionsListProps) {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // prevents accidental drags
            },
        })
    )

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (!over || active.id === over.id) return

        setAlbum((prev) => {
            const oldIndex = prev.sections.findIndex(
                (section) => section.id === active.id
            )
            const newIndex = prev.sections.findIndex(
                (section) => section.id === over.id
            )

            if (oldIndex === -1 || newIndex === -1) return prev

            const updatedSections = [...prev.sections]
            const [moved] = updatedSections.splice(oldIndex, 1)
            updatedSections.splice(newIndex, 0, moved)

            return {
                ...prev,
                sections: updatedSections,
            }
        })
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={album.sections.map((section) => section.id)}
                strategy={verticalListSortingStrategy}
            >
                {album.sections.map((section, index) => (
                    <SortableItem
                        key={section.id}
                        section={section}
                        index={index}
                        total={album.sections.length}
                        setAlbum={setAlbum}
                    />
                ))}
            </SortableContext>
        </DndContext>
    )
}
