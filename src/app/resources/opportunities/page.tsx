"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import OpportunityCard from "@/components/opportunity";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/range-slider";
import YOIFooter from "@/components/footer";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <section className="flex-1 z-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg">
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            Help Us Make a Difference
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Help us fulfil our mission to educate the public and empower
            today&apos;s youth. Discover opportunities to get involved.
          </p>
        </Banner>
        {/* grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-12 */}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 px-12 py-8 md:py-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Search Options</h2>
            <Input
              className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              placeholder="Search opportunities..."
              type="search"
            />
            <Accordion type="multiple">
              <AccordionItem value="category">
                <AccordionTrigger className="flex w-full justify-between">
                  Category
                </AccordionTrigger>
                <AccordionContent className="space-y-2 mb-4 p-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-advocacy" />
                    Advocacy
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-clothing" />
                    Education
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-contest" />
                    Contest/ Competition
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-cleanup" />
                    Clean-up
                  </Label>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="location">
                <AccordionTrigger className="flex w-full justify-between">
                  Location
                </AccordionTrigger>
                <AccordionContent className="space-y-2 mb-4 p-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-physical" />
                    In-Person
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-digital" />
                    Digital
                  </Label>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="age">
                <AccordionTrigger className="flex w-full justify-between">
                  Age Requirement
                </AccordionTrigger>
                <AccordionContent className="mb-2 p-2">
                  <Slider min={0} max={25} minStepsBetweenThumbs={0} step={1} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sort">
                <AccordionTrigger className="flex w-full justify-between">
                  Sort
                </AccordionTrigger>
                <AccordionContent className="mb-4 p-2">
                  <RadioGroup defaultValue="newest">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="newest" id="r1" />
                      <Label htmlFor="r1">Newest First</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oldest" id="r2" />
                      <Label htmlFor="r2">Oldest First</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="alphabet" id="r3" />
                      <Label htmlFor="r3">Alphabetically</Label>
                    </div>
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 gap-4">
            {[...Array(60)].map((e, index) => (
              <OpportunityCard
                key={index}
                title={`Opportunity #${index + 1} Name`}
                provider={`Provider #${index + 1} Name`}
                image="/images/placeholder.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
                link="#"
                className=""
              />
            ))}
          </div>
        </div>
      </section>
      <YOIFooter />
    </main>
  );
}