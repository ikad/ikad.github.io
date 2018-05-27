import { addLocaleData, IntlProvider } from "react-intl"
import * as ja from "react-intl/locale-data/ja"
import ja_JP from "./ja_JP"

addLocaleData([...ja])

export default class I18n {
  public static intl = new IntlProvider({locale: "ja", messages: ja_JP}, {}).getChildContext().intl

  public static t(key: string) {
    return I18n.intl.formatMessage({id: key})
  }

  public static date(unixEpochMSec: number) {
    return I18n.intl.formatDate(unixEpochMSec)
  }

  public static time(unixEpochMSec: number) {
    return I18n.intl.formatTime(unixEpochMSec)
  }

  public static dateTime(unixEpochMSec: number) {
    return `${I18n.date(unixEpochMSec)} ${I18n.time(unixEpochMSec)}`
  }
}
