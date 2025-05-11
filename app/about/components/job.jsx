"use client";

import PropTypes from "prop-types";
import dayjs from "dayjs";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

const Job = ({ company, position, link, start, end, summary }) => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <TimelineItem
      onClick={() => setShowSummary(!showSummary)}
      style={{ cursor: "pointer" }}
    >
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        <p className="md:text-md text-sm">
          {dayjs(start).format("MMMM YYYY")} -{" "}
          {end ? dayjs(end).format("MMMM YYYY") : "PRESENT"}
        </p>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {position}
        </Typography>
        <a
          href={link}
          className="hover:underline hover:text-orange-400 text-sm"
        >
          <Typography className="italic">{company}</Typography>
        </a>
        <Collapse in={showSummary}>
          <ul className="list-disc">
            {summary.map((bullet) => (
              <li key={bullet} className="sm:text-sm text-xs text-start">
                {bullet}
              </li>
            ))}
          </ul>
        </Collapse>
      </TimelineContent>
    </TimelineItem>
  );
};

Job.PropTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  summary: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Job;
