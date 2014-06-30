var Engine;

$(document).ready(function(){

  "use strict";

  Engine = {

    ui : {

      labels : function(){
        $('#headerSearch label, #innerSearch label').compactize();
      },

      newsListings : function(){

        if($(".news-a").size() === 0){ return; }

        var $parent = $(".news-a"),
            $items = $parent.find(".item"),
            hiddenClass = "visually-hidden",
            activeClass = "on";

            $items.each(function(){

              $(this).prepend("<i class='icon-accordion-arrow closed'></i>");

              var $trigger = $(this).find(".title a, .icon-accordion-arrow"),
                  $blurb = $(this).find(".blurb"),
                  $iconTrigger = $(this).find(".icon-accordion-arrow");

                  $trigger.click(function(e){
                    e.preventDefault();
                    $blurb.toggleClass(hiddenClass);
                    $iconTrigger.toggleClass(activeClass);
                  });
            });

      }, // newsListings

      footerDate : function(){
        var currentTime = new Date(),
            year = currentTime.getFullYear();

            $("span.auto-copy").text(year);
      }, // footerDate

      quickPanel : function(){

        if($(".quick-panel-a").size() === 0){ return; }
        var $panel = $(".quick-panel-a"),
            $closeBtn = $panel.find(".close-button"),
            hiddenClass = "off";

            $panel.removeClass(hiddenClass);

            $closeBtn.on("click",function(e){
              e.preventDefault();
              $panel.addClass(hiddenClass);
            });

      },

      calendar : function(){

        if($(".calendar-a").size() === 0){ return; }

        var $parent = $(".calendar-a");

        function calendarToggle(){
          var $toggleNav = $parent.find(".view-picker ul"),
              $gridView = $parent.find(".grid-view"),
              $listView = $parent.find(".list-view"),
              $calendarViews = $parent.find(".calendar-view"),
              hiddenClass = "visually-hidden",
              selectedClass = "selected";

              $toggleNav.find("a").click(function(e){
                e.preventDefault();
                var target = $(this).attr("href");
                $toggleNav.find("li").removeClass(selectedClass);
                $(this).parent().addClass(selectedClass);
                $calendarViews.addClass(hiddenClass);
                $(target).removeClass(hiddenClass);
              });

        } // calendarToggle()

        function listViewCalendar(){

          var $days = $parent.find(".list-view .day"),
              selectedDayClass = "selected",
              collapsedClass = "collapsed";

              // add accordion trigger
              $days.each(function(){
                var $eventsWrapper = $(this).find(".info");
                    $eventsWrapper.each(function(){
                      $(this).prepend("<i class='icon-accordion-arrow collapsed'></i>");
                    });
              });

              // handle basic accordion clicks
              $(".icon-accordion-arrow").on("click", function(e){
                e.preventDefault();
                var $trigger = $(this),
                    $parentDay = $(this).closest(".day");
                if($parentDay.hasClass(selectedDayClass)){
                  $parentDay.toggleClass(selectedDayClass);
                }else{
                  $days.removeClass(selectedDayClass);
                  $trigger.closest(".day").toggleClass(selectedDayClass);
                }
              });

        } // listViewCalendar()


        function calendarInit(){
          calendarToggle();
          listViewCalendar();
        } // calendarInit();

        calendarInit();

      }, // calendar

      // hacks in image/logo link into top nav
      topNav : function(){
        var logoHtml = "<li><a href='http://www.ucsf.edu/'><img src='/sites/all/themes/ucsf/images/logo-ucsf-small.png' alt='ucsf'></a></li>";
        $("#top-nav").prepend(logoHtml)
      } // topNav

    }// ui
  }// Engine

  Engine.ui.labels();
  Engine.ui.newsListings();
  Engine.ui.footerDate();
  Engine.ui.quickPanel();
  Engine.ui.calendar();
  Engine.ui.topNav();

});
