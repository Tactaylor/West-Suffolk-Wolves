import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Instagram, Youtube, Twitch } from "lucide-react";

export default function WestSuffolkWolvesWebsite() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <img src="/wolves-logo-refined.png" alt="West Suffolk Wolves Logo" className="h-14" />
        <nav className="space-x-6 text-gray-300">
          <a href="#store" className="hover:text-white">Store</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#events" className="hover:text-white">Events</a>
          <a href="#media" className="hover:text-white">Media</a>
        </nav>
        <Button variant="outline" className="text-white border-white hover:bg-gray-800">Contact</Button>
      </header>

      <section className="text-center py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl font-bold mb-4">HOWL WITH US</h1>
        <p className="text-gray-400 text-lg">Join the pack. Compete. Represent West Suffolk.</p>
      </section>

      <section id="store" className="p-10">
        <h2 className="text-3xl font-semibold mb-6">Merch Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <img src="/wolves-tshirt-black.png" alt="Black Wolves T-Shirt" className="rounded-t-lg" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Wolves Tee - Black</h3>
              <p className="text-gray-400">Classic fit, bold logo. Join the howl.</p>
              <Button className="mt-3 w-full flex gap-2"><ShoppingCart size={18} /> Buy Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-gray-800 p-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 West Suffolk Wolves. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="YouTube"><Youtube /></a>
          <a href="#" aria-label="Twitch"><Twitch /></a>
        </div>
      </footer>
    </main>
  );
}
