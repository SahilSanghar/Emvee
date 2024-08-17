import React from 'react'

const GereralParts = () => {
return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Left column (2/3 of the width) */}
            <div className="flex items-center justify-center">
                leftContent
            </div>
            {/* Right column (1/3 of the width) */}
            <div className="grid grid-cols-1 grid-rows-2 gap-4">
                <div className="flex items-center justify-center">
                    topRightContent
                </div>
                <div className="flex items-center justify-center">
                    bottomRightContent
                </div>
            </div>
        </div>
)
}

export default GereralParts