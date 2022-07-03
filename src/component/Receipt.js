function Receipt(props) {
    var {
        main,
        protein,
        rice,
        sauce,
        drink,
        cost,
    }

    return (
        <div>
        <span>Main:</span>{props.receipt.order.main}
        <h1><span>Person:</span>{props.receipt.person}
        <span>Protein:</span>{props.receipt.order.protein}
        <span>Rice:</span>{props.receipt.order.rice}
        <span>Sauce:</span>{props.receipt.order.sauce}
        <span>Drink:</span>{props.receipt.order.drink}
        <span>Cost:</span>{props.receipt.order.cost}</h1>

        
        </div>
    
    )
}