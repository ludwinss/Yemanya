const MainPageStyles = (view: string) => ({
    root: {
        backgroundColor: '#F0F1F6'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(20rem,1fr))',
        gap: '1rem',
        ...Boolean(view === 'row') && {
            gridTemplateColumns: 'auto',
        }

    }
})

export default MainPageStyles;