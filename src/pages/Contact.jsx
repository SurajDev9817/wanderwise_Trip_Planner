import React from "react";
import Navbar from "../components/common/Navbar";

import { Button } from "../components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRight, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 py-10">
        <Button>Click Me</Button>

        <Button variant="destructive">
          Delete
        </Button>
      </div>

      {/* Hover Card */}
      <div className="flex justify-center pb-10">
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer font-semibold text-purple-600">
            Hover over me
          </HoverCardTrigger>

          <HoverCardContent className="w-80">
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">
                React Framework
              </h3>

              <p className="text-sm text-slate-500">
                The React Framework is created and maintained by Vercel.
              </p>

              <img
                src="/heroImage.jpg"
                alt="Home"
                className="h-32 w-full rounded-lg object-cover"
              />
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Trip Card */}
      <div className="flex justify-center px-6 pb-16">
        <Card className="group w-full max-w-sm overflow-hidden rounded-3xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src="/heroImage.jpg"
              alt="Mustang, Nepal"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Location */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-800 backdrop-blur">
              <MapPin size={15} className="text-purple-600" />
              Mustang, Nepal
            </div>
          </div>

          {/* Header */}
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Trip Details
                </CardTitle>

                <CardDescription className="mt-1">
                  Create your next adventure
                </CardDescription>
              </div>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                Adventure
              </span>
            </div>
          </CardHeader>

          {/* Content */}
          <CardContent>
            <p className="text-sm leading-6 text-slate-600">
              Discover Mustang, a breathtaking Himalayan region known for its
              dramatic landscapes, ancient monasteries, and unique Tibetan
              culture. A perfect destination for adventure, nature, and
              unforgettable mountain views.
            </p>
          </CardContent>

          {/* Footer */}
          <CardFooter>
            <Button
              className="
                group/button
                w-full rounded-xl
                bg-linear-to-r from-purple-600 to-pink-500
                py-6
                font-semibold text-white
                shadow-lg shadow-purple-500/20
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-purple-500/30
              "
            >
              Explore Mustang

              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Contact;