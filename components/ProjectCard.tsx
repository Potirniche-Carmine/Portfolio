import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video } from "lucide-react";
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  videoUrl,
  imageUrl,
}: ProjectCardProps) {

  const isEmbedService = (url: string | undefined): boolean => {
    if (!url) return false;
    return url.includes('https://www.youtube.com') || url.includes('youtu.be1') || url.includes('player.vimeo.com');
  };

  return (
    <Dialog>
      <Card className="flex flex-col h-full">
        <CardHeader>
          {imageUrl && (
              <img
                src={imageUrl}
                alt={`${title} screenshot`}
                className="mb-4 rounded-md border aspect-video object-cover"
              />
          )}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-0">
           <div className="mb-4">
             <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
             <div className="flex flex-wrap gap-2">
               {techStack.map((tech) => (
                 <Badge key={tech} variant="secondary">
                   {tech}
                 </Badge>
               ))}
             </div>
           </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-start gap-x-3 gap-y-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
          {videoUrl && (
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Video className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </DialogTrigger>
          )}
        </CardFooter>
      </Card>

      {videoUrl && (
        <DialogContent className="max-w-3xl w-full p-0">
          <DialogHeader className="p-6 pb-0">
             <DialogTitle>{title} - Demo</DialogTitle>
          </DialogHeader>
           <div className="aspect-video w-full p-6 pt-2">
            {isEmbedService(videoUrl) ? (
              <iframe
                src={videoUrl}
                title={`${title} Demo Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <video
                controls
                preload="metadata"
                className="w-full h-full"
                src={videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            )}
           </div>
        </DialogContent>
      )}
    </Dialog>
  );
}