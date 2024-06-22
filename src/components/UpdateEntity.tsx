import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { Entities } from '../interfaces/Entities';
import { EntityType } from '../interfaces/EntityType';
import { UPDATE_FORM } from './forms/update/UpdateForm';
import { mapTags } from '../services/api.service';
import { ClipLoader } from 'react-spinners';

interface UpdateEntityProps {
    entity: Entities;
    entityType: EntityType;
    onUpdate: (entity: FormData) => void;
    isOpen: boolean;
    onClose: () => void;
}
type ExistedDataType = Omit<Entities, 'url' | 'edited' | 'created'> | null;

const UpdateEntity: React.FC<UpdateEntityProps> = ({ isOpen, onUpdate, onClose, entityType, entity }) => {
    const [loading, setLoading] = useState(true);
    const [existedData, setExistedData] = useState<ExistedDataType>(null);
    const eForm = UPDATE_FORM[entityType];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await mapTags(entity);
                setExistedData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [entity]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Edit a record</h2>
            {loading ? (
                <div className="spinner-container">
                    <ClipLoader color="#000000" size={50} />
                </div>
            ) : (
                existedData && React.createElement(eForm, { onUpdate, existedData })
            )}
        </Modal>
    );
}

export default UpdateEntity;
