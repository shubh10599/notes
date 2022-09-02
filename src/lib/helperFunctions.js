import * as moment from 'moment'
import _ from 'lodash'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const getBadge = (status) => {
  switch (status) {
    case 'Accepted':
      return 'green'
    case 'Pending':
      return 'orange'
    case 'Rejected':
      return 'red'
    case 'Removed':
      return 'red'
    default:
      return 'orange'
  }
}

export const formateDate = () => {
  return moment().format('DD MMM YYYY h:mm:ss A')
}

export const formateDateArg = (date) => {
  return moment(date).format('DD MMM YYYY h:mm:ss A')
}

export const systemDateToCustom = (systemDate) => {
  return moment(systemDate).format('DD MMM YYYY')
}

export const toIndianDateFormat = (date) => {
  return moment(date).format('DD-MM-YYYY')
}

export const customDateToSystem = (formatedDate, splitValue = ' ') => {
  let dateArray = formatedDate.split(splitValue)
  let date = dateArray[0]
  let month = dateArray[1]
  let year = dateArray[2]
  return year + '-' + (months.indexOf(month) + 1) + '-' + date
}
