<template>
    <section class="blog_area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mb-5 mb-lg-0">
                    <div class="blog_left_sidebar">
                        <article class="blog_item">
                            <div class="blog_item_img">
                                <img class="card-img rounded-0" src="/img/blog/single_blog_1.png" alt="">
                                <routerLink to="/blog/2" class="blog_item_date">
                                    <h3>15</h3>
                                    <p>Jan</p>
                                </routerLink>
                            </div>

                            <div class="blog_details">
                                <routerLink class="d-inline-block" href="single-blog.html">
                                    <h2>Google inks pact for new 35-storey office</h2>
                                </routerLink>
                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                    he earth it first without heaven in place seed it second morning saying.</p>
                                <ul class="blog-info-link">
                                    <li><a href="/blog/2"><i class="fa fa-user"></i>ADOGOU Kossi</a></li>
                                    <li><a href="/blog/2"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                </ul>
                            </div>
                        </article>
                        <nav class="blog-pagination justify-content-center d-flex">
                            <ul class="pagination">
                                <li class="page-item">
                                    <routerLink to="/blog/2" class="page-link" aria-label="Previous">
                                        <i class="ti-angle-left"></i>
                                    </routerLink>
                                </li>
                                <li class="page-item">
                                    <routerLink to="/blog/2" class="page-link">1</routerLink>
                                </li>
                                <li class="page-item active">
                                    <routerLink to="/blog/2" class="page-link">2</routerLink>
                                </li>
                                <li class="page-item">
                                    <routerLink to="/blog/2" class="page-link" aria-label="Next">
                                        <i class="ti-angle-right"></i>
                                    </routerLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                            <form action="/blog/2">
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder='Search Keyword'
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Search Keyword'">
                                        <div class="input-group-append">
                                            <button class="btn" type="button"><i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                    type="submit">Rechercher</button>
                            </form>
                        </aside>

                        <aside class="single_sidebar_widget popular_post_widget">
                            <h3 class="widget_title">Recent Post</h3>
                            <div class="media post_item">
                                <img src="/img/post/post_1.png" alt="post">
                                <div class="media-body">
                                    <routerLink to="single-blog.html">
                                        <h3>From life was you fish...</h3>
                                    </routerLink>
                                    <p>January 12, 2019</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img src="/img/post/post_2.png" alt="post">
                                <div class="media-body">
                                    <routerLink to="single-blog.html">
                                        <h3>The Amazing Hubble</h3>
                                    </routerLink>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img src="/img/post/post_3.png" alt="post">
                                <div class="media-body">
                                    <routerLink to="single-blog.html">
                                        <h3>Astronomy Or Astrology</h3>
                                    </routerLink>
                                    <p>03 Hours ago</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img src="/img/post/post_4.png" alt="post">
                                <div class="media-body">
                                    <routerLink to="single-blog.html">
                                        <h3>Asteroids telescope</h3>
                                    </routerLink>
                                    <p>01 Hours ago</p>
                                </div>
                            </div>
                        </aside>

                        <aside class="single_sidebar_widget newsletter_widget">
                            <h4 class="widget_title">Newsletter</h4>

                            <form action="/blog/2">
                                <div class="form-group">
                                    <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required>
                                </div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                    type="submit">Subscribe</button>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>