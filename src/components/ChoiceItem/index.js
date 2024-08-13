import {
  EachChoiceButton,
  EachChoiceItem,
  EachChoiceImage,
} from '../../styledComponents'

const ChoiceItem = props => {
  const {eachChoiceDetails} = props

  const {imageUrl, id} = eachChoiceDetails

  return (
    <EachChoiceItem className="choice-item">
      <EachChoiceButton>
        <EachChoiceImage
          src={imageUrl}
          alt={id}
          className="choice-image"
          onClick
        />
      </EachChoiceButton>
    </EachChoiceItem>
  )
}

export default ChoiceItem
