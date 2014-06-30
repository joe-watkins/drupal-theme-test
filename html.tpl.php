<?php
/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or 'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>
<!doctype html>
<html class="no-js">
<head profile="<?php print $grddl_profile; ?>">
  <meta charset="utf-8">
  <title>UCSF</title>
  <link rel="shortcut icon" href="<?php print $directory; ?>/favicon.ico">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="stylesheet" href="/<?php print $directory; ?>/styles/main.min.css"/>
  <script src="/<?php print $directory; ?>/scripts/vendor/head.js"></script>
</head>
<body class="<?php print $classes; ?>">

  <!--[if lt IE 9]>
  <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <header id="header" role="banner">
    <div class="top-header-links">
      <div class="wrap-a">
        <?php
          $top_nav = menu_navigation_links('menu-top-nav');
          print theme('links', array(
            'links' => $top_nav,
            'attributes' => array(
              'id' => 'top-nav',
              'class' => array('links', 'clearfix'),
            )
          ));
        ?>
      </div>
    </div>
    <div class="header-wrap">
      <div class="wrap-a">
        <div class="logo search">
          <div class="row">
            <div class="col-xs-6">
              <div class="logo"><a href="/">Department of<br>Pharmaceutical Services</a></div>
            </div>
            <div class="col-xs-6 search-a">
              <form action="#" role="search" class="site-search" id="headerSearch">
                <p>
                  <label for="searchField">Search Here</label>
                  <input type="text" name="searchField" id="searchField">
                  <button type="submit"><span>search</span></button>
                  </p>
              </form>
            </div>
          </div>
        </div><!--// logo search -->

        <div class="main-nav">
          <nav role="navigation">
            <!--
            <ul>
              <li><a href="/professional-and-drug-info">Professional &amp;<br> Drug Info</a></li>
              <li><a href="/rx-purchasing-and-billing">Rx Purchasing<br>&amp; Billing</a></li>
              <li><a href="/staff-operations">Staff<br>Operations</a></li>
              <li><a href="/training-and-development">Training &amp;<br>Developement</a></li>
              <li><a href="/hr-memos-meeting-and-minutes">HR, Memos<br>&amp; Minutes</a></li>
              <li><a href="/guidelines-p-and-p">Guidelines,<br>P&amp;P</a></li>
              <li class="last single-word"><a href="/apex">APeX</a></li>
            </ul>
            -->
            <?php
              $user_menu = menu_navigation_links('main-menu');
              print theme('links', array(
                'links' => $user_menu,
                'attributes' => array(
                  'id' => 'main-menu',
                  'class' => array('links', 'clearfix'),
                )
              ));
            ?>
          </nav>
        </div><!--// .main-nav -->
      </div><!--// .wrap-a -->
    </div>
  </header>

  <main role="main" id="main">
    <div class="wrap-a">

      <?php print $page; ?>

    </div>
  </main>

  <footer id="footer" role="contentinfo">

    <div class="related-a">
      <div class="wrap-a">
        <h4>Related Sites:</h4>
        <ul>
          <li><a href="#">Guidelines</a></li>
          <li><a href="#">Meeting Minutes</a></li>
          <li><a href="#">Search Results</a></li>
        </ul>
      </div>
    </div>

    <div class="fine-print container-fluid">
        <div class="row">
          <div class="col-xs-5 footer-links">
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Privacy &amp; Terms</a></li>
            </ul>
          </div>
          <div class="col-xs-7 copyright">
            <p><span class="updated">Last Updated: MAR. 18 - 2014</span> &copy; <span class="auto-copy"></span> The Regents of the University of California</p>
          </div>
        </div>
    </div>

  </footer>

  <div id="sidebar-a">
    <ul>
      <li class="time-sheets"><a href="#">Time<br>Sheets</a></li>
      <li class="reference"><a href="#">Reference</a></li>
      <li class="active-staff"><a href="#">Active<br>Staff</a></li>
      <li class="med-ctr-directory"><a href="#">Med Ctr<br>Directory</a></li>
      <li class="calendar"><a href="#">Calendar</a></li>
      <li class="cafeteria"><a href="#">Cafeteria<br>Menu</a></li>
    </ul>
  </div>

  <script src="<?php print $directory; ?>/scripts/main.min.js"></script>
</body>
</html>
