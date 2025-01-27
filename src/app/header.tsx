"use client";

import { Button } from "@/components/ui/button";
import { formatToDollar } from "@/util/currency";
import {
  NotificationCell,
  NotificationFeedPopover,
  NotificationIconButton,
} from "@knocklabs/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const notifButtonRef = useRef(null);
  const session = useSession();

  const userId = session?.data?.user?.id;

  return (
    <div className="bg-black/50 py-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity flex items-center gap-2"
          >

            <span className="text-white text-xl font-semibold">Hush!</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors text-lg"
            >
              Overview
            </Link>

            {userId && (
              <>
                <Link
                  href="/items/create"
                  className="text-white hover:text-gray-300 transition-colors text-lg"
                >
                  List Items
                </Link>

                <Link
                  href="/auctions"
                  className="text-white hover:text-gray-300 transition-colors text-lg"
                >
                  My Auctions
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right Section: Notifications, User Avatar, and Sign In/Out */}
        <div className="flex items-center gap-6">
          {userId && (
            <>
              {/* Notification Icon Button */}
              <div className="relative z-50">
                <NotificationIconButton
                  ref={notifButtonRef}
                  onClick={(e) => setIsVisible(!isVisible)}
                />
              </div>

              {/* Notification Feed Popover */}
              <div className="fixed top-16 right-4 z-50ss0">
                <NotificationFeedPopover
                  buttonRef={notifButtonRef}
                  isVisible={isVisible}
                  onClose={() => setIsVisible(false)}
                  renderItem={({ item, ...props }) => (
                    <NotificationCell {...props} item={item}>
                      <div className="rounded-xl">
                        <Link
                          className="text-blue-400 hover:text-blue-500 transition-colors"
                          onClick={() => {
                            setIsVisible(false);
                          }}
                          href={item.data ? `/items/${item.data.itemId}` : "#"}
                        >
                          Someone outbidded you on{" "}
                          <span className="font-bold">{item.data?.itemName}</span>{" "}
                          by ${formatToDollar(item.data?.bidAmount ?? 0)}
                        </Link>
                      </div>
                    </NotificationCell>
                  )}
                />
              </div>
            </>
          )}

          {session?.data?.user.image && (
            <Image
              src={session.data.user.image}
              width="40"
              height="40"
              alt="user avatar"
              className="rounded-full hover:opacity-80 transition-opacity"
            />
          )}

          <div className="text-white text-lg">{session?.data?.user?.name}</div>

          <div>
            {userId ? (
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
                className="bg-white text-black hover:bg-gray-200 transition-colors"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={() => signIn()}
                className="bg-white text-black hover:bg-gray-200 transition-colors"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
