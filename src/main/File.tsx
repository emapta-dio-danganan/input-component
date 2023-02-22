import React from 'react';
import '../scss/styles.scss';
// import '../scss/library/file.scss';


interface IProps {
    config: {
        id: string,
        type: string,
        placeholder?: string,
        label?: string,
        selected?: any
        accept?: string,
        disabled?: boolean,
        multiple?: boolean,
       

    },
    hasChips: boolean,
    customClass?: string,

  

    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data?: string) => void,
    onRemoved?:(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void

}




const File: React.FC<IProps> = ({ config, customClass, hasChips, onChanged }) => {
    let { id,disabled, placeholder, multiple, selected} = { ...config };
  


    /** 
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onchangeHandler(event: React.ChangeEvent<HTMLInputElement> | any) {
        if (event) {
           
            if (onChanged) {

                if (multiple) {
                    let files: Array<string> = [...selected,...Array.from(event.target.files)];
                    config.selected = files;
                    event.selected = files
                  
                } else {
                    let files = Array.from(event.target.files);
                    config.selected = files;
                    event.selected = files

                   
                }

                return onChanged && onChanged(event);


            } else {
                console.error("No onChanged property");
            }
        }

    }

    /**
    * removeFile
    * remove file from the props value then return it
    * @param {*} event - event
    * @param {*} idx - index of the file which will be removed
    */
    function removeFile(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>| any, idx: number) {
        if (event) {
            event.preventDefault();
            
            let copyValues = selected.filter((val: any, id: number) => id !== idx );
            event.selected = copyValues;
            config.selected = copyValues;
            
            return onChanged && onChanged(event);
        }
    }

    return (
        <div className={'em-attach ' + customClass}>
            <div
                className={disabled ? 'em-attach-field input-disabled' : 'em-attach-field'}
                data-testid={id ? id : 'file-default-id'}
            >
                {
                    hasChips &&
                    <div className="em-attach-chips">
                        {
                            selected && selected.constructor === Array && selected.length > 0 ? (
                                selected.map((val: any, idx: number) => (
                                    <div key={idx} className="em-chip">
                                        <span>{val.name}</span>
                                        {
                                            disabled ? null :
                                                <button onClick={event => removeFile(event, idx)} className="close">
                                                </button>
                                        }
                                    </div>
                                ))
                            ) : null
                        }
                    </div>
                }
                <label htmlFor={id} className="em-attach-input">
                    <span>{placeholder ? placeholder : "Attach File"}</span>
                </label>
                <input 
                    {...config} 
                    onChange={event => onchangeHandler(event)} 
                    style={{ 'display': 'none' }} />
            </div>
        </div>
    );
}

export default File;
