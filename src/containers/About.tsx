import * as React from "react"

import { Theme, withStyles, WithStyles } from "material-ui/styles"

import EmailIcon from "@material-ui/icons/Email"

import Button from "material-ui/Button"
import Card, { CardActions, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"

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
