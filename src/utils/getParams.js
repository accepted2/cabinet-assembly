import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";

const getParams = (element, dataAttrSelector) => {
  console.log('element:', element)
  console.log('dataAttrSelector:', dataAttrSelector)

  return JSON.parse(
    element.getAttribute(getAttrNameFromSelector(dataAttrSelector))
  )


}

export default getParams