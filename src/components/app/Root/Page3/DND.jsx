import React, { useState } from 'react';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';

const ReactDnD = () => {
  const [fields, setFields] = useState(['Phone', 'Website', 'Email']);

  const handleDragEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) return;

    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      const movedItem = updatedFields[oldIndex];
      updatedFields.splice(oldIndex, 1);
      updatedFields.splice(newIndex, 0, movedItem);
      return updatedFields;
    });
  };

  const DragHandle = sortableHandle(() => (
    <div>
      {/* Drag handle component */}
    </div>
  ));

  const SortableDraggable = SortableElement(({ items }) => (
    <div className="bg-white px-4 py-4 rounded-lg mb-2">
      <DragHandle />
      {items === 'Phone' && (
        <div>
          <div>
            {/* Phone specific content */}
          </div>
        </div>
      )}
      {items === 'Website' && (
        <div className="mb-2">
          {/* Website specific content */}
        </div>
      )}
      {items === 'Email' && (
        <div className="mt-2">
         <h1>Hello</h1>
        </div>
      )}
    </div>
  ));

  const SortableContainerWrapper = SortableContainer(({ fields }) => (
    <div>
      {fields.map((items, index) => (
        <SortableDraggable key={items} index={index} items={items} />
      ))}
    </div>
  ));

  return (
    <div>
      <div className="col-span-2 rounded-lg p-2 bg-gray-200" style={{ border: '2px dotted #0077B5' }}>
        {fields && (
          <SortableContainerWrapper fields={fields} onSortEnd={handleDragEnd} useDragHandle />
        )}

        <h1 className="text-md text-center mt-5 mb-5">
          Click the fields you want to add in the card
        </h1>
      </div>
    </div>
  );
};

export default ReactDnD;
