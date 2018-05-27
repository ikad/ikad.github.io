import * as React from "react"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import EmailIcon from "@material-ui/icons/Email"

interface IAboutProps {
  any?: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  card: {
    maxWidth: 750,
  }
})

class About extends React.Component<IAboutProps & WithStyles> {
  public render() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom={true} variant="headline" component="h2">
            About me
          </Typography>
          <Typography component="p">
            Hello, world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <EmailIcon />
            &nbsp;Contact
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)<IAboutProps>(About)
