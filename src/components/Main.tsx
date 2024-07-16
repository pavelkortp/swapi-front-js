import React, { useEffect, useState } from 'react';
import EntitiesTable from './EntitiesTable';
import { createEntity, deleteEntity, getEntitiesPage, TOAST_OPTIONS, updateEntity } from '../services/api.service';
import PagesBar from './PagesBar';
import CreateEntity from './CreateEntity';
import { EntityType } from '../interfaces/EntityType';
import { toast } from 'react-toastify';
import UpdateEntity from './UpdateEntity';
import { EntityParser } from '../utils/EntityParser';
import Entity from '../interfaces/Entity';
import { ClipLoader } from 'react-spinners'; // Ensure this import is present

interface MainProps {
    entityType: EntityType;
}

const Main: React.FC<MainProps> = ({ entityType }) => {
    const [page, setPage] = useState<number>(1);
    const [entities, setEntities] = useState<Entity[]>([]);
    const [count, setCount] = useState<number>(0);
    const [createFormVisible, setCreateFormVisible] = useState<boolean>(false);
    const [updateFormVisible, setUpdateFormVisible] = useState<boolean>(false);
    const [selectedEntity, setSelectedEntity] = useState<Entity>();
    const [loading, setLoading] = useState(true); // Loading state

    const setItems = (page: number) => {
        setLoading(true); // Set loading to true when fetching data
        getEntitiesPage(entityType, page)
            .then(res => {
                if(res.results.length==0) return;
                setEntities(res.results);
                setCount(res.count);
            })
            .catch((e)=>{
                alert('no entities found');
            })
            .finally(() => setLoading(false)); // Set loading to false when data is fetched
    }

    useEffect(() => {
        setItems(page);
    }, [page, entityType]);

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

    const handleUpdate = (entity: FormData) => {
        updateEntity(entityType, EntityParser.getId(selectedEntity!), entity)
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

    const onEdit = (e: Entity) => {
        setUpdateFormVisible(true);
        setSelectedEntity(e);
    }

    if (loading) {
        return (
            <div className="spinner-container">
                <ClipLoader color="#000000" size={50} />
            </div>
        );
    }

    return (
        <main className="container">
            <EntitiesTable
                items={entities}
                entityType={entityType}
                onDelete={handleDelete}
                onEdit={onEdit}
            />
            <br />
            <PagesBar onClick={setPage} count={count} />
            <br />
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
                entity={selectedEntity!}
                entityType={entityType}
                onUpdate={handleUpdate}
                isOpen={updateFormVisible}
                onClose={() => setUpdateFormVisible(false)}
            />
        </main>
    )
}

export default Main;
