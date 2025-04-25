import * as yup from "yup"

const levelUpSchema = yup.object().shape({
    level:yup.number().required("Please input lv")
})

export {levelUpSchema}