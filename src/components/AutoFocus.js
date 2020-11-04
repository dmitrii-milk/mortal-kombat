import React, {useRef, useEffect, useCallback, memo} from 'react';

function AutoFocus({children, ...rest}) {
    const container = useRef(null)
    
    useEffect(() => {
        container.current.focus();
    }, [])

    const onBlur = useCallback(() => {
        container.current.focus()
    }, [])
    return (
        <div 
        ref={container} 
        onBlur={onBlur}
        tabIndex="0"
        {...rest}
        style={{
            width: "520px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            }}>
            {children}
        </div>
    )
}

export default memo(AutoFocus);