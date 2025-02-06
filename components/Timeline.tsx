import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2024",
    title: "Founded Yamya Soln",
    description:
      "Yamya Soln was established with a mission to deliver cutting-edge web and mobile development solutions for businesses worldwide.",
  },
  {
    year: "2024 Q4",
    title: "First Major Client",
    description:
      "Successfully delivered our first enterprise-level eCommerce project with seamless CMS integration and a high-performance web platform.",
  },
  {
    year: "2025 Q1",
    title: "Team Expansion & Growth",
    description:
      "Expanded our team with skilled developers and introduced mobile app development services, catering to Android & iOS platforms.",
  },
  {
    year: "2025 Q2",
    title: "Strategic Partnerships",
    description:
      "Partnered with leading enterprises to develop AI-powered automation solutions, enhancing efficiency and scalability for our clients.",
  },
  {
    year: "2026 & Beyond",
    title: "Future Innovations",
    description:
      "Looking ahead, Yamya Soln is set to revolutionize AI/ML integration in web development, creating intelligent, data-driven applications for businesses worldwide.",
  },
];

const AboutUsTimeline = () => {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 8 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Journey
      </Typography>
      <Timeline position="alternate">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} >
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{py:'40px'}}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{px:'20px'}}>
                  {item.year} - {item.title}
                </Typography>
                <Typography color="textSecondary" sx={{px:'10px'}}>{item.description}</Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default AboutUsTimeline;
