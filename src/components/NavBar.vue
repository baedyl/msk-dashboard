<template>
  <div
    class="flex flex-col w-40 h-screen px-2 pt-2 sm:w-20 md:w-40 bg-blue-dark border-r dark:bg-gray-800 dark:border-white"
  >
    <img src="./public/icons/msk-logo.png" class="text-center pr-4 pl-1" />

    <hr class="my-4 dark:border-gray-600" />

    <a
      class="flex items-center mt-4 md:mx-2 md:py-2 sm:py-0 sm:mx-auto rounded-md dark:bg-gray-700 dark:text-gray-200 relative"
      href="#"
    >
      <DashboardLogo class="logo-white sm:my-8 md:my-0" />

      <span
        class="mx-2 font-medium text-white text-sm sm:hidden md:block md:mt-1"
        >Dashboard</span
      >
    </a>

    <a
      class="flex items-center md:mx-2 md:py-2 sm:py-0 sm:mx-auto text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <BookingLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Booking</span
      >
    </a>

    <a
      class="flex items-center md:px-2 md:py-2 sm:py-8 sm:mx-auto md:m-0 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <TimelineLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >History</span
      >
    </a>

    <a
      class="flex items-center w-full md:px-2 md:my-2 sm:py-0 sm:mx-auto text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <CreateLogo class="logo-gray sm:ml-5 md:ml-0 md:mr-2" />
      <span
        class="mx-1font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Book a physio</span
      >
    </a>

    <a
      class="flex items-center md:px-2 md:py-2 sm:py-8 sm:mx-auto md:m-0 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <BadgeLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Profile</span
      >
    </a>

    <a
      class="flex items-center md:px-2 md:py-2 sm:py-0 sm:mx-auto md:m-0 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <AccessLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Injuries</span
      >
    </a>

    <a
      class="flex items-center md:px-2 md:py-2 sm:py-8 sm:mx-auto md:m-0 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <PaymentLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Billing</span
      >
    </a>

    <a
      class="flex items-center md:px-2 md:py-2 sm:py-0 sm:mx-auto md:m-0 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <DesktopLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Consultation</span
      >
    </a>

    <a
      class="flex items-center md:mx-2 md:py-2 sm:py-8 sm:mx-auto transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      href="#"
    >
      <LogoutLogo class="logo-gray" />
      <span
        class="mx-2 font-medium text-gray text-sm sm:hidden md:block md:mt-1"
        >Logout</span
      >
    </a>
  </div>
</template>

<script>
import BookingLogo from "./public/icons/calendar.svg";
import DashboardLogo from "./public/icons/dashboard.svg";
import TimelineLogo from "./public/icons/timeline.svg";
import CreateLogo from "./public/icons/create.svg";
import BadgeLogo from "./public/icons/badge.svg";
import AccessLogo from "./public/icons/access.svg";
import PaymentLogo from "./public/icons/payment.svg";
import DesktopLogo from "./public/icons/desktop.svg";
import LogoutLogo from "./public/icons/logout.svg";

export default {
  name: "NavBar",
  components: {
    BookingLogo,
    DashboardLogo,
    TimelineLogo,
    CreateLogo,
    BadgeLogo,
    AccessLogo,
    PaymentLogo,
    DesktopLogo,
    LogoutLogo,
  },
};
</script>

<style lang="scss">
.logo {
  &-white {
    fill: #ffffff;
  }
  &-gray {
    fill: #8c95a7;
  }
  &-yellow {
    fill: #FFEC03;
  }
  &-purple {
    fill: #6e1c80;
  }
}
</style>
