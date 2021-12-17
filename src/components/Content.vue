<template>
  <div class="absolute top-24 md:left-48 sm:left-24 grid grid-cols-1 xl:grid-cols-3 gap-10">
    <div class="relative">
      <!-- Front side of the card -->
      <div class="box box01" v-if="frontVisible">
        <div class="flex">
          <div
            class="flex-1 bg-pink text-yellow text-left heading__title uppercase font-bold rounded-md pt-2 pl-4"
          >
            <span>My booking</span>
          </div>
          <div class="flex-none bg-pink rounded-md w-10 h-10 ml-1">
            <CalendarLogo class="logo-yellow w-16 h-16 p-2" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="w-107 h-212 mt-1 rounded-t-md card card-booking">
            <div class="heading-content__right">
              <p class="flex flex-col text-left mb-8">
                <span>INJURY</span><br />
                <span class="major">Right Elbow</span>
              </p>
              <div class="flex">
                <div>
                  <pan-thumb :image="avatar" class="avatar" />
                </div>
                <div>
                  <p class="text-left ml-4 uppercase">
                    <span class="content">PT NAME</span><br />
                    <span class="content-value">DIMITRI ALEXIOU</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="heading-content">
              <div class="grid-content--box">
                <div class="content float-left flex-col">
                  <p class="border-bottom border-right my-4 mx-4 text-left">
                    <span class="">DATE</span>
                    <br />
                    <span class="content-value">{{ date }}</span>
                  </p>
                  <p class="border-bottom border-right my-4 mx-4 text-left">
                    <span class="">TIME</span>
                    <br />
                    <span class="content-value">{{ time }}</span>
                  </p>
                  <p class="border-right my-4 mx-4 text-left">
                    <span class="">ORDER ID</span>
                    <br />
                    <span class="content-value">{{ orderId }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="flex card-btn w-107 h-39 rounded-b-md p-2 justify-center hover:bg-purple-hover"
          >
            <DesktopLogo class="logo-white h-14" />
            <span class="flex-none pt-1 ml-2 font-bold text-white"
              >Go to Consultation</span
            >
          </button>
        </div>
        <div class="arrow arrow-right cursor-pointer" @click="slideOneNext">
          <ChevronRight class="logo-purple" />
        </div>
      </div>

      <!-- Back side of the card -->
      <div
        id="card-black"
        class="box box02 card-back absolute top-0"
        v-if="backVisible"
      >
        <div class="arrow arrow-left cursor-pointer">
          <ChevronLeft class="logo-purple" @click="slideOnePrev" />
        </div>
        <div class="flex">
          <div
            class="flex-1 bg-blue text-yellow text-left font-bold uppercase heading__title rounded-md pt-2 pl-4"
          >
            <span class="">My booking</span>
          </div>
          <div class="flex-none bg-blue rounded-md w-10 h-10 ml-1">
            <CalendarLogo class="logo-yellow w-16 h-16 p-2" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="w-107 h-212 mt-1 rounded-t-md card card-extra"></div>
          <button
            class="flex card-btn w-107 h-39 rounded-b-md p-2 justify-center"
          >
            <DesktopLogo class="logo-white h-14" />
            <span class="flex-none pt-1 ml-2 font-bold text-white"
              >Go to Consultation</span
            >
          </button>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="arrow arrow-left cursor-pointer">
        <ChevronLeft class="logo-purple" />
      </div>
      <div class="flex">
        <div
          class="flex-1 w-96 bg-orange text-yellow text-left font-bold uppercase heading__title rounded-md pt-2 pl-4"
        >
          <span>My booking</span>
        </div>
        <div class="flex-none bg-orange rounded-md w-10 h-10 ml-1">
          <CalendarLogo class="logo-yellow w-16 h-16 p-2" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="h-212 w-107 mt-1 rounded-t-md card-injury">
          <div class="heading-content__right">
            <p class="flex flex-col text-left mb-8">
              <span>INJURY</span><br />
              <span class="major">Left Shoulder</span>
            </p>
            <div class="flex">
              <div>
                <pan-thumb :image="avatar" class="avatar" />
              </div>
              <div>
                <p class="text-left ml-4 uppercase">
                  <span class="content">PT NAME</span><br />
                  <span class="content-value">DIMITRI ALEXIOU</span>
                </p>
              </div>
            </div>
          </div>
          <div class="heading-content">
            <div class="grid-content--box">
              <div class="content float-left flex-col">
                <p class="border-bottom border-right my-4 mx-4 text-left">
                  <span class="">DATE</span>
                  <br />
                  <span class="content-value">{{ dateInjury }}</span>
                </p>
                <p class="border-bottom border-right my-4 mx-4 text-left">
                  <span class="">TIME</span>
                  <br />
                  <span class="content-value">{{ time }}</span>
                </p>
                <p class="border-right my-4 mx-4 text-left">
                  <span class="">ORDER ID</span>
                  <br />
                  <span class="content-value">{{ orderId }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="flex card-btn w-107 h-39 rounded-b-md p-2 justify-center hover:bg-orange-hover"
        >
          <AccessLogo class="logo-white h-14" />
          <span class="flex-none pt-1 ml-2 font-bold text-white"
            >My Exercises</span
          >
        </button>
      </div>
      <div class="arrow arrow-right cursor-pointer">
        <ChevronRight class="logo-purple" />
      </div>
    </div>

    <div>
      <physio-card />
    </div>
  </div>
</template>

<script>
import CalendarLogo from "./public/icons/calendar.svg";
import DesktopLogo from "./public/icons/desktop.svg";
import AccessLogo from "./public/icons/access.svg";
import ChevronLeft from "./public/icons/chevron_left.svg";
import ChevronRight from "./public/icons/chevron_right.svg";
import PanThumb from "@/components/PanThumb";
import PhysioCard from "@/components/PhysioCard";
import { gsap } from "gsap";

export default {
  name: "Content",
  components: {
    CalendarLogo,
    DesktopLogo,
    AccessLogo,
    ChevronLeft,
    ChevronRight,
    PanThumb,
    PhysioCard,
  },
  props: {
    avatar: {
      type: String,
      default: require("@/assets/imgpsh_fullsize_anim.jpeg"),
    },
  },
  data() {
    return {
      targets: [],
      count: 0,
      frontVisible: true,
      backVisible: false,
      date: "28-10-2021",
      dateInjury: "27-10-2021",
      time: "18:30 - 18:50",
      orderId: "346789",
    };
  },
  mounted() {
    this.slideInit();
  },
  methods: {
    slideInit() {
      this.count = 0;
      this.targets = document.querySelectorAll(".box");
      gsap.set(this.targets, { xPercent: 100 });
      gsap.set(this.targets[0], { xPercent: 0 });
    },
    slideOneNext() {
      this.slideInit();
      gsap.fromTo(
        this.targets[this.count],
        { xPercent: 0, zIndex: 0 },
        { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: 0 }
      );
      this.count = this.count < this.targets.length - 1 ? ++this.count : 0;
      gsap.fromTo(
        this.targets[this.count],
        { xPercent: 100, zIndex: 10 },
        { duration: 1.2, xPercent: 0, zIndex: 0 }
      );
      this.backVisible = true;
      this.frontVisible = false;
    },
    slideOnePrev() {
      // let count = 0;
      this.slideInit();
      this.backVisible = false;
      this.frontVisible = true;
      gsap.fromTo(
        this.targets[this.count],
        { xPercent: 0, zIndex: 10 },
        { xPercent: 0, zIndex: 0 }
      );
      gsap.fromTo(
        this.targets[this.count],
        { xPercent: 100, zIndex: 0 },
        { delay: 0, duration: 1.2, xPercent: 0, zIndex: 0 }
      );
      this.count = this.count < this.targets.length ? --this.count : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 521px;
  &-booking {
    background: transparent
      linear-gradient(180deg, #e03282, #8a198e 85%, #8a198e) 0 0 no-repeat
      padding-box;
  }
  &-injury {
    background: transparent
      linear-gradient(180deg, #f48d00, #8a198e 85%, #8a198e) 0 0 no-repeat
      padding-box;
  }
  &-extra {
    background: transparent
      linear-gradient(180deg, #58b8eb, #036092 85%, #8a198e) 0 0 no-repeat
      padding-box;
  }
  &-physio {
    width: 521px;
    height: 293px;
    background: url(https://i.ibb.co/8NSDvzn/cover.png),
      linear-gradient(180deg, #58b8eb, #6e1c80 85%, #6e1c80);
    background-repeat: no-repeat;
    background-position: center;
  }
}

.card-btn {
  position: relative;
  bottom: 0;
  left: 0;
  border-radius: none;
  border-color: #6e1c80;
  background: #6e1c80;
  font: normal normal 14px/16px SF Pro Display Bold;
}

.content-title {
  text-align: left;
  font: normal normal 900 14px/16px SF Pro Display;
  letter-spacing: 0px;
}

.content-value {
  text-align: left;
  font: normal normal 900 34px/40px SF Pro Display;
}

.arrow {
  position: absolute;
  opacity: 1;
  top: 150px;
  &-left {
    left: -4%;
  }
  &-right {
    position: absolute;
    left: 516px;
  }
}

.heading {
  &-icon {
    padding: 10px;
    width: 38px;
    margin-left: 4px;
  }
  &-content {
    height: 251px;
    width: 521px;
    border-radius: 6px;
    opacity: 1;
    &__right {
      position: absolute;
      font: normal normal 900 14px/16px SF Pro Display;
      letter-spacing: 0px;
      color: #ffffff;
      margin-top: 47px;
      margin-left: 32%;
      height: 251px;
    }
  }
  &__title {
    font: normal normal 900 15px/18px SF Pro Display Bold;
    letter-spacing: 0px;
    opacity: 1;
  }
}

.border {
  &-bottom {
    width: 126px;
    border-bottom: 1px solid #ffd603;
    margin-bottom: -16px;
    padding-bottom: 12px;
    padding-top: 5px;
  }
  &-right {
    width: 126px;
    border-right: 1px solid #ffd603;
    padding-top: 5px;
  }
}

.major {
  font: normal normal 900 34px/40px SF Pro Display Bold;
}

.content {
  font: normal normal normal 14px/21px SF Pro Display;
  letter-spacing: 0px;
  color: #ffffff;
  &-value {
    font: normal normal 900 14px/21px SF Pro Display Bold;
  }
}
</style>
