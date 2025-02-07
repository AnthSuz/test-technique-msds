"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Clock, Milk } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Alert, AlertDescription } from "../ui/alert";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

export function MeetupDialog() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} className="w-full mt-3 sm:mt-0 sm:float-right">
          <Milk />
          Prendre rendez-vous
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] h-[90%] sm:h-[fit-content] rounded-xl sm:max-w-[652px] p-4 overflow-scroll">
        <DialogHeader>
          <DialogTitle className="font-medium">
            Prendre un rendez-vous
          </DialogTitle>
          <DialogDescription>
            Selectionnez la tâche que vous avez effectué
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-3/5">
            <Tabs defaultValue="phone" className="mb-4">
              <TabsList className="grid w-full grid-cols-2 h-[63.5px]">
                <TabsTrigger value="phone" className="flex flex-col h-[55.5px]">
                  <Image
                    src="/img/phone.svg"
                    alt="phone"
                    width={17.5}
                    height={17.5}
                  />
                  <p>Téléphone</p>
                </TabsTrigger>
                <TabsTrigger value="sms" className="flex flex-col h-[55.5px]">
                  <Image
                    src="/img/sms.svg"
                    alt="sms"
                    width={17.5}
                    height={17.5}
                  />
                  SMS
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Textarea
              placeholder="Ecrire un commentaire..."
              className="resize-none h-[96px]"
            />
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <div className="flex">
                <Image
                  src="/img/child.svg"
                  alt="child"
                  width={10}
                  height={16}
                  className="mr-3"
                />
                <p className="text-base text-zinc-950 font-medium">
                  Vous êtes sûr de vouloir prendre rendez vous ?
                </p>
              </div>
              <Switch defaultChecked className="ml-4" />
            </div>
          </div>
          <Separator orientation="vertical" className="mx-6 hidden sm:block" />
          <div className="w-full sm:w-2/5">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mb-4 mt-4 sm:mt-0"
            />
            <div className="flex items-center">
              <p className="mr-3">à</p>
              <div className="relative">
                <Clock
                  height={15}
                  width={15}
                  className="absolute left-[12px] top-[10px]"
                  color="red"
                  fill="#656565"
                  stroke="white"
                />
                <Input
                  type="time"
                  defaultValue="17:00"
                  className="pl-[40px] bg-neutral-50 shadow-[0_0_0_1px_white,0_0_0_2px_black]"
                />
              </div>
            </div>
          </div>
        </div>
        <Alert className="text-blue-700 bg-blue-50 border border-blue-200 mt-4">
          <AlertDescription className="flex items-center">
            <Image
              src="/img/info.svg"
              alt="info"
              width={6}
              height={5}
              className="mr-3"
            />
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="text-base h-[28px] mt-3 sm:mt-0"
              variant="outline"
            >
              Annuler
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="text-base h-[28px]" type="submit">
              Ajouter
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
