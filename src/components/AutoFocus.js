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
        className="container pt-3"
        ref={container} 
        onBlur={onBlur}
        tabIndex="0"
        {...rest}
        style={{
            width: "560px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            outline: "none"
            }}>
            {children}
        </div>
    )
}

export default memo(AutoFocus);