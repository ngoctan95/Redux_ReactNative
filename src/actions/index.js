/* Argument for which selected.
 Combine with a type and do with payload.*/ 
export const selectedLibIdAction=(libId)=>{
    return {
        type:'selected_library',
        payload: libId
    };
}; 