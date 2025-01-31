"use client"; // Ensures this is a client component

import { Code2, Smartphone, Cloud, Brain, Lock, Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"; // Ensure correct import

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs",
    icon: Code2
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    icon: Cloud
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions for complex problems",
    icon: Brain
  },
  {
    title: "Cybersecurity",
    description: "Protecting your digital assets",
    icon: Lock
  },
  {
    title: "Performance Optimization",
    description: "Enhancing speed and efficiency",
    icon: Gauge
  }
];

export function ServicesSection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group transition-all duration-500 ease-in-out cursor-pointer hover:bg-blue-800 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center text-center p-6"
              >
                <CardHeader className="flex flex-col justify-center items-center">
                  <Icon className="h-12 w-12 text-primary group-hover:text-white mb-4" />
                  <CardTitle className="group-hover:text-white">{service.title}</CardTitle>
                  <CardDescription className="group-hover:text-white">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  {/* <Button variant="ghost" className="mt-2" onClick={() => router.push("/service")}>
                    Learn More →
                  </Button> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
