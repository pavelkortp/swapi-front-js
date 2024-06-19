import EntitiesTable from './EntitiesTable';
import {createEntity, deleteEntity, getEntitiesPage, TOAST_OPTIONS, updateEntity} from '../services/api.service';
import PagesBar from './PagesBar';
import CreateEntity from './CreateEntity';
import React, {useEffect, useState} from 'react';
import {EntityType} from '../interfaces/EntityType';
import {toast} from 'react-toastify';
import UpdateEntity from './UpdateEntity';
import {Entities} from '../interfaces/Entities';

interface MainProps {
    entityType: EntityType;
}


const Main: React.FC<MainProps> = ({entityType}) => {
    const [page, setPage] = useState<number>(1);
    const [entities, setEntities] = useState<Entities[]>([]);
    const [count, setCount] = useState<number>(0);
    const [createFormVisible, setCreateFormVisible] = useState<boolean>(false);
    const [updateFormVisible, setUpdateFormVisible] = useState<boolean>(false);
    const [selectedEntity, setSelectedEntity] = useState<Entities>();

    const setItems = (page: number) => {
        getEntitiesPage(entityType, page)
            .then(res => {
                setEntities(res.results);
                setCount(res.count);
            })
    }

    useEffect(() => {
        setItems(page);
    }, [page, entityType]);

    useEffect(() => {

    }, []);

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

    const handleCreate = (entity: FormData) => {
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

    const handleUpdate = (id: string, entity: FormData) => {
        updateEntity(entityType, id, entity)
            .then(r => {
                if (!r.data?.error) {
                    toast.success('🦄 Updated!', TOAST_OPTIONS);
                    setItems(page);
                } else {
                    toast.error(`🦄 Error! ${r.data.message}`, TOAST_OPTIONS);
                }
            })
            .catch(error => {
                toast.error('🦄 There is some problem!', TOAST_OPTIONS);
            });
    }

    const onEdit = (e: Entities) =>{
        setUpdateFormVisible(true);
        setSelectedEntity(e);

    }

    if(!entities[0]){
        return <h1>BEDA</h1>
    }

    return (
        <main className="container">
            <EntitiesTable
                items={entities}
                entityType={entityType}
                onDelete={handleDelete}
                onEdit={onEdit}
            />
            <br></br>
            <PagesBar onClick={setPage} count={count}/>
            <br></br>
            <button
                className="btn btn-primary"
                onClick={() => setCreateFormVisible(true)}
            >
                Create entity
            </button>


            <CreateEntity
                isOpen={createFormVisible}
                onCreate={handleCreate}
                onClose={() => setCreateFormVisible(false)}
                entityType={entityType}
            />

            <UpdateEntity
                entity={entities[0]}
                onUpdate={handleUpdate}
                isOpen={updateFormVisible}
                onClose={()=> setUpdateFormVisible(false)}
            />

        </main>
    )
}

export default Main;