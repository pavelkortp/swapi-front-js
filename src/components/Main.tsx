import EntitiesTable from './EntitiesTable';
import {createEntity, deleteEntity, getEntitiesPage, TOAST_OPTIONS, updateEntity} from '../services/api.service';
import PagesBar from './PagesBar';
import CreateEntity from './CreateEntity';
import React, {useEffect, useState} from 'react';
import Entity from '../interfaces/Entity';
import {EntityType} from '../interfaces/EntityType';
import {toast} from 'react-toastify';
import {CreateEntityDto} from '../dto/create-entity.dto';

interface MainProps {
    entityType: EntityType;
}


const Main: React.FC<MainProps> = ({entityType}) => {
    const [page, setPage] = useState<number>(1);
    const [entities, setEntities] = useState<Entity[]>([]);
    const [count, setCount] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        setItems(page);
    }, [page]);

    const setItems = (page: number) => {
        getEntitiesPage(entityType, page)
            .then(res => {
                setEntities(res.results);
                setCount(res.count);
            })
    }

    const handleDelete = (id: string) => {
        deleteEntity(entityType, id)
            .then(r => {
                if (!r.data?.error) {
                    toast.success('🦄 Deleted!', TOAST_OPTIONS);
                    setItems(page);
                } else {
                    toast.error(`🦄 Error! ${r.data.message}`, TOAST_OPTIONS);
                }
            })
            .catch(error => {
                toast.error('🦄 There is some problem!', TOAST_OPTIONS);
            });
    }

    const handleCreate = (entity: CreateEntityDto) => {
        createEntity(entityType, entity)
            .then(r => {
                if (!r.data?.error) {
                    toast.success('🦄 Created!', TOAST_OPTIONS);
                    setItems(page);
                } else {
                    toast.error(`🦄 Error! ${r.data.message}`, TOAST_OPTIONS);
                }
            })
            .catch(error => {
                toast.error('🦄 There is some problem!', TOAST_OPTIONS);
            });
    }

    const handleUpdate= (id:string) => {
        // updateEntity(entityType, id, entity)
        //     .then(r => {
        //         if (!r.data?.error) {
        //             toast.success('🦄 Updated!', TOAST_OPTIONS);
        //             setItems(page);
        //         } else {
        //             toast.error(`🦄 Error! ${r.data.message}`, TOAST_OPTIONS);
        //         }
        //     })
        //     .catch(error => {
        //         toast.error('🦄 There is some problem!', TOAST_OPTIONS);
        //     });
    }

    return (
        <main className="container">
            <EntitiesTable
                items={entities}
                entityType={entityType}
                onDelete={handleDelete}
                onEdit={handleUpdate}
            />
            <br></br>
            <PagesBar onClick={setPage} count={count}/>
            <br></br>
            <button
                className="btn btn-primary"
                onClick={() => setModalVisible(true)}
            >
                Create entity
            </button>
            <CreateEntity
                entityType={entityType}
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}
                onCreate={handleCreate}
            />
        </main>
    )
}

export default Main;