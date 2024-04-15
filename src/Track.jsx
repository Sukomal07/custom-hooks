function Track({ todo }) {
    return (
        <div>
            {todo?.title}
            <br />
            {todo?.description}
        </div>
    )
}

export default Track
