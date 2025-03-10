import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent,
  createStyles,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  makeStyles,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Styles } from 'jss';

/**
 * AboutCard component style
 */
const useStyles = makeStyles(
  (theme: Theme): Styles =>
    createStyles({
      card: {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.common.white
      },
      cardContent: {
        '&:last-child': {
          paddingBottom: 16
        }
      },
      infoTitle: {
        fontWeight: 'bold'
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 'bold'
      },
      expansionPanel: {
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, .15)',
        marginTop: 5
      },
      link: {
        color: theme.palette.secondary.main
      }
    })
);

/**
 * Custom Material UI expansion panel
 */
const ExpansionPanel = withStyles({
  root: {
    '&:before': {
      backgroundColor: 'transparent'
    }
  }
})(MuiExpansionPanel);

/**
 * About card component, displayed at bottom of InfoGrid
 */
const AboutCard = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.card} raised={true}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.infoTitle} color="textSecondary">
          About
        </Typography>
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            aria-controls="what-about-content"
            id="what-about-header"
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <div className={classes.column}>
              <Typography className={classes.heading} color="textSecondary">
                What is this?
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="textSecondary">
              IdeaDog is a social platform for sharing ideas.
              <br />
              <br />
              We&apos;ve all had those sudden bursts of inspiration where we go
              - &quot;wow, that is simply a <i>great</i> idea&quot; - but know
              we will never follow up.
              <br />
              <br />
              Now, instead of losing those ideas, share them with the world!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            aria-controls="what-about-content"
            id="what-about-header"
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <div className={classes.column}>
              <Typography className={classes.heading} color="textSecondary">
                What&apos;s the dog&apos;s name?
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="textSecondary">
              His name is Tully, and he is a beloved boy.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            aria-controls="what-about-content"
            id="what-about-header"
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <div className={classes.column}>
              <Typography className={classes.heading} color="textSecondary">
                Is that really an emoji in the URL?
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="textSecondary">
              <a
                href="idea🐶.ws"
                aria-label="github-link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                You bet it is
              </a>
              .
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            aria-controls="what-about-content"
            id="what-about-header"
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <div className={classes.column}>
              <Typography className={classes.heading} color="textSecondary">
                Who are you?
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="textSecondary">
              Ah, I am not one, but many. Well... just two of us.
              <br />
              <br />
              The IdeaDog team is made up of two Holberton School full-stack
              software engineering students. We are passionate about static
              typing and the most trendy (but for a reason, always for a reason)
              technologies.
              <br />
              <br />
              Check us out at our{' '}
              <a
                href="https://github.com/bdbaraban/ideadog"
                aria-label="github-link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                GitHub link
              </a>
              .
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CardContent>
    </Card>
  );
};

export default React.memo(AboutCard);
