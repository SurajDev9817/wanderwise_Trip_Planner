import {
  ArrowRight,
  Compass,
  Heart,
  Lightbulb,
  Map,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  Globe2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: Sparkles,
    title: "Thoughtful by design",
    description:
      "Every itinerary is designed around how you actually want to travel, not a generic checklist of tourist attractions.",
  },
  {
    icon: Heart,
    title: "Travel with meaning",
    description:
      "We believe the best trips create stories, memories, and connections that stay with you long after you return home.",
  },
  {
    icon: Compass,
    title: "Explore confidently",
    description:
      "From hidden gems to practical planning, we make discovering a new destination feel exciting instead of overwhelming.",
  },
];

const stats = [
  {
    value: "50K+",
    label: "Trips planned",
  },
  {
    value: "120+",
    label: "Destinations",
  },
  {
    value: "4.9/5",
    label: "Traveler rating",
  },
  {
    value: "24/7",
    label: "Travel support",
  },
];

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Tell us your vision",
    description:
      "Share your destination, interests, travel style, budget, and the kind of experience you're looking for.",
  },
  {
    number: "02",
    icon: Map,
    title: "We craft your journey",
    description:
      "Our intelligent planning experience turns your ideas into a balanced and personalized itinerary.",
  },
  {
    number: "03",
    icon: Plane,
    title: "Go make memories",
    description:
      "Everything is organized so you can spend less time planning and more time enjoying the journey.",
  },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" />

          <div className="absolute right-0 top-72 h-64 w-64 rounded-full bg-fuchsia-100/50 blur-3xl" />

          <div className="absolute left-0 top-96 h-48 w-48 rounded-full bg-purple-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          {/* Hero content */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <Sparkles className="h-4 w-4" />
              About WanderWise
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Travel more.
              <span className="block bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Plan less.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              We help curious travelers turn big travel dreams into
              thoughtfully crafted journeys that feel personal, effortless,
              and unforgettable.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="rounded-full bg-violet-600 px-7 hover:bg-violet-700"
              >
                Start planning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                 onClick={() => navigate("/login")}
                variant="outline"
                className="rounded-full px-7"
              >
                Explore destinations
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-r from-violet-200/60 via-fuchsia-100/40 to-violet-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-violet-100 via-white to-fuchsia-100 shadow-2xl">
              <div className="aspect-16/7">
                {/* Decorative travel illustration */}
                <div className="relative flex h-full items-center justify-center overflow-hidden">
                  {/* Background circles */}
                  <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-violet-200/50 blur-xl" />
                  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-fuchsia-200/50 blur-xl" />

                  {/* Main illustration */}
                  <div className="relative text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-4xl bg-white shadow-xl">
                      <Globe2 className="h-14 w-14 text-violet-600" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      Your next adventure
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Starts with WanderWise
                    </p>
                  </div>

                  {/* Floating destination cards */}
                  <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur sm:block">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                        <Compass className="h-5 w-5 text-violet-600" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Your journey
                        </p>
                        <p className="font-semibold text-slate-900">
                          Made for you
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur md:block">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100">
                        <Map className="h-5 w-5 text-fuchsia-600" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Explore</p>
                        <p className="font-semibold text-slate-900">
                          New places
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 sm:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-4 text-center ${
                index !== 0 ? "border-l border-slate-200" : ""
              }`}
            >
              <p className="text-3xl font-bold tracking-tight text-slate-950">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Our story
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              We believe planning a trip should be part of the adventure.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                WanderWise was created for travelers who want more than a
                standard itinerary. We wanted to build a smarter way to
                discover places, experiences, and moments that genuinely fit
                you.
              </p>

              <p>
                Instead of spending hours jumping between tabs, reviews, maps,
                and spreadsheets, WanderWise brings the journey together in
                one simple experience.
              </p>

              <p>
                Because the best trips aren't about seeing everything. They're
                about experiencing the right things.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                <Heart className="h-5 w-5 text-violet-600" />
              </div>

              <p className="text-sm font-medium text-slate-700">
                Built for travelers, by people who love to explore.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="space-y-4 pt-10">
                <div className="overflow-hidden rounded-4xl bg-violet-100">
                  <div className="flex aspect-4/5 items-center justify-center bg-linear-to-br from-violet-100 to-purple-200">
                    <Compass className="h-16 w-16 text-violet-500" />
                  </div>
                </div>

                <div className="rounded-4xl bg-slate-950 p-6 text-white">
                  <Globe2 className="h-7 w-7 text-violet-400" />

                  <p className="mt-5 text-2xl font-bold">
                    120+
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    destinations to explore
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div className="rounded-4xl bg-violet-600 p-7 text-white">
                  <Heart className="h-7 w-7" />

                  <p className="mt-12 text-2xl font-bold">
                    Made for travelers
                  </p>

                  <p className="mt-2 text-sm leading-6 text-violet-100">
                    Personal recommendations and meaningful experiences.
                  </p>
                </div>

                <div className="overflow-hidden rounded-4xl bg-fuchsia-100">
                  <div className="flex aspect-4/5 items-center justify-center bg-linear-to-br from-fuchsia-100 to-violet-100">
                    <Map className="h-16 w-16 text-fuchsia-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              What we believe
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Built around better ways to travel
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every part of WanderWise is designed to make travel feel more
              personal, inspiring, and simple.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card
                  key={value.title}
                  className="rounded-4xl border-slate-200 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                      <Icon className="h-6 w-6 text-violet-600" />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              How WanderWise works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              From dream trip to departure.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
              We've simplified the travel planning process so you can focus on
              the part that matters most: experiencing the world.
            </p>

            <Button
              variant="outline"
              className="mt-8 rounded-full"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group flex gap-5 rounded-4xl border border-slate-200 bg-white p-6 transition-all hover:border-violet-200 hover:shadow-lg sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-slate-950">
                        {step.title}
                      </h3>

                      <span className="text-sm font-semibold text-violet-400">
                        {step.number}
                      </span>
                    </div>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST CTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-4xl bg-slate-950 px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-violet-300">
                <ShieldCheck className="h-5 w-5" />

                <span className="text-sm font-medium">
                  Travel with confidence
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Your journey deserves more than a generic itinerary.
              </h2>

              <p className="mt-4 max-w-2xl text-slate-400">
                Discover recommendations that fit your interests, your pace,
                and the way you want to experience the world.
              </p>
            </div>

            <Button
              size="lg"
               onClick={() => navigate("/login")}
              className="rounded-full bg-white px-7 text-slate-950 hover:bg-slate-100"
            >
              Start exploring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
            <Users className="h-7 w-7 text-violet-600" />
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Ready to discover your next adventure?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Let WanderWise turn your travel ideas into a journey you'll
            actually be excited about.
          </p>

          <Button
            size="lg"
             onClick={() => navigate("/login")}
            className="mt-8 rounded-full bg-violet-600 px-8 hover:bg-violet-700"
          >
            Plan my trip
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}