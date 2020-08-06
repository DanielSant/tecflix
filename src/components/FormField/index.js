import React from 'react';

function FormField({ labelName, type, name, value, onChange }) {
    return (
        <div>
          <label>
            {labelName}:
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
    );
}

export default FormField;