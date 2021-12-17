<template>
  <nav
    class="fixed top-0 right-0 z-10 headbar bg-gray-light flex flex-wrap items-center justify-between bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <span class="md:ml-10 text-bold text-blue-dark">Dashboard</span>

      <!-- Right elements -->
      <div class="flex items-center relative">
        <div class="dropdown relative bg-white mr-2 rounded-md">
          <a
            class="text-gray-500 hover:text-gray-700 focus:text-gray-700 px-2 py-2 dropdown-toggle hidden-arrow flex items-center"
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <NotificationLogo class="logo" />
            <!--span
              class="text-gray-dark bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
              >1</span
            -->
          </a>
        </div>
        <div class="dropdown relative md:mr-8">
          <a
            class="dropdown-toggle flex items-center hidden-arrow"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="./public/icons/imgpsh_fullsize_anim.png"
              class="rounded-md"
              style="height: 40px; width: 40px"
              alt="Profile Picture"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
</template>

<script>
import NotificationLogo from "./public/icons/notification.svg";

export default {
  name: "NavBar",
  components: {
    NotificationLogo
  },
};
</script>

<style lang="scss">
$layout-breakpoint-small: 768px;

.headbar {
  width: calc(100% - 160px);
  height: 66px;
}

.logo {
    fill: #ff0000;
}

@media (max-width: $layout-breakpoint-small) {
  .headbar {
    width: calc(100% - 80px);
  }
}
</style>
