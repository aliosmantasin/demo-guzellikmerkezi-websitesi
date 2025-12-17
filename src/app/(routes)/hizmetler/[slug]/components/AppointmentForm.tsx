"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  surname: z.string().min(2, "Soyisim en az 2 karakter olmalı"),
  phone: z
    .string()
    .min(10, "Telefon numarası en az 10 haneli olmalı")
    .max(15, "Telefon numarası en fazla 15 haneli olabilir"),
});

type AppointmentFormValues = z.infer<typeof schema>;

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    // Burada backend'e gönderim yapılabilir
    toast({
      title: "Başarılı!",
      description: "Randevu talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">İsim</Label>
        <Input id="name" {...register("name")}
          placeholder="Adınız"
          autoComplete="given-name"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="surname">Soyisim</Label>
        <Input id="surname" {...register("surname")}
          placeholder="Soyadınız"
          autoComplete="family-name"
        />
        {errors.surname && <p className="text-sm text-red-500 mt-1">{errors.surname.message}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Telefon Numarası</Label>
        <Input id="phone" {...register("phone")}
          placeholder="05xxxxxxxxx"
          autoComplete="tel"
        />
        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
      </Button>
    </form>
  );
} 