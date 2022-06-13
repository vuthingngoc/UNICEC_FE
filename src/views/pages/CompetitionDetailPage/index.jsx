import React from 'react';
import AdminFooter from 'components/Footers/AdminFooter.js';
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import { useLocation } from 'react-router-dom';
import routes from 'routes.js';
import CompetitionDetailHeader from './components/CompetitionDetailHeader';
import CompetitionDetailBody from './components/CompetitionDetailBody';

const competitionData = {
  id: '1',
  title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
  type: 'Tài năng',
  startTime: '2022-06-23T11:00:00',
  endTimeRegister: '2022-06-20T11:00:00',
  club_name: 'FU Guitar Club',
  club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
  create_time: '2022-05-23T09:00:10',
  location: 'Đại học FPT',
  address: 'Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh',
  marjors: ['Kỹ Thuật', 'Ngôn ngữ'],
  sponsor: [
    {
      name: 'HUTECH',
      logo: 'https://logovina.com/wp-content/uploads/2020/06/logo-hutech.jpg',
    },
    {
      name: 'FPT University',
      logo: 'https://pbs.twimg.com/profile_images/1230021618698600448/fJ0IeKqc_400x400.jpg',
    },
  ],
  content:
    '<p class="ql-align-justify"><strong>[PHÁT ĐỘNG CUỘC THI ẢNH: “RẠNG”]</strong></p><p class="ql-align-justify">------------------------------------------------------------</p><p class="ql-align-justify">Link nhận bài dự thi:&nbsp;https://forms.gle/KumRQ95pqXmhXnJB9</p><p class="ql-align-justify">Thời gian nhận bài dự thi: 01/06/2022 - 06/06/2022</p><p class="ql-align-justify">------------------------------------------------------------</p><p class="ql-align-justify">Ngày nay, khi công nghệ không ngừng phát triển, thế hệ trẻ ngày càng có đa dạng cách thức tiếp cận với vấn đề văn hoá và cuộc sống bên ngoài, tuy nhiên cách tiếp cận, cảm nhận và sẻ chia các văn hoá còn chưa thật sự tối ưu và tạo ra sự khác biệt trong khi việc tìm tòi và sở thích chụp ảnh, lưu giữ và sẻ chia các khoảnh khắc qua các thiết bị thông minh của thế hệ trẻ lại đang là xu thế dẫn đầu trong thời đại 4.0 hiện nay.&nbsp;</p><p class="ql-align-justify">Vậy theo bạn, có cách nào khiến thế hệ trẻ vừa có thể tiếp cận tốt nhất với văn hoá và đồng thời tận dụng được sở thích chụp ảnh của bản thân?&nbsp;</p><p><br></p><p class="ql-align-justify">Hãy cùng chúng mình đến với:&nbsp;<strong style="color: rgb(255, 0, 0);">CUỘC THI ẢNH: “RẠNG”&nbsp;</strong></p><p><br></p><ol><li class="ql-align-justify"><strong>TỔNG QUAN CUỘC THI</strong></li><li class="ql-align-justify">“Rạng” là cuộc thi ảnh dành cho các bạn trẻ ở mọi miền trên tổ quốc, cuộc thi được lên ý tưởng bởi Ban tổ chức Vị Project. Như tên gọi, “Rạng” - làm sáng lên hình ảnh tuyệt vời của đất nước. Đất nước còn nhiều những nét đẹp nhưng đang “trong bóng tối” mà thông qua cuộc thi thì sẽ được biết đến nhiều hơn, giống như rạng đông của ngày mới.</li></ol><p><br></p><ol><li class="ql-align-justify"><strong>MỤC ĐÍCH</strong></li><li class="ql-align-justify">Ban tổ chức Vị Project đã quyết định triển khai sự kiện cuộc thi ảnh “Rạng” để cung cấp sân chơi lành mạnh,năng động, tuyên truyền những nét đẹp văn hóa và sự khác biệt về cuộc sống, con người tại hai thành phố chủ chốt về kinh tế, chính trị và tấp nập hàng đầu của cả nước là Hà Nội và Thành phố Hồ Chí Minh qua những những bức ảnh chân thật nhất được chụp từ ống kính người tham gia.</li><li class="ql-align-justify">Với mong muốn mang đến cái nhìn tổng quát nhất về các nét đặc trưng, giản dị và khác biệt cho sự so sánh giữa văn hóa,cuộc sống tại hai vùng miền, những cái nhìn khách quan mang đến sự hứng thú tìm tòi và mong muốn đặt chân khám phá, tìm hiểu cuộc sống con người tại các vùng miền khác nhau.</li><li class="ql-align-justify">Nhằm đề cao việc bảo tồn các giá trị văn hóa thường nhật và vấn đề cảm thụ văn hóa của người dân trong quan điểm văn hóa không ở đâu xa mà chính là xung quanh cuộc sống của mỗi con người, liên quan đến mọi mặt đời sống vật chất và tinh thần của con người, là phục trang, ẩm thực, là công trình kiến trúc, nghệ thuật,...</li></ol><p><br></p><ol><li class="ql-align-justify"><strong>ĐỐI TƯỢNG</strong></li></ol><ul><li class="ql-align-justify">Các bạn học sinh, sinh viên độ tuổi từ 15–25.</li><li class="ql-align-justify">Có niềm yêu thích chụp ảnh,quan tâm mạnh mẽ.</li><li class="ql-align-justify">Mong ước mong muốn tìm hiểu và tuyên truyền cảnh sắc và giá trị trong nét khác biệt văn hóa vùng miền Nam - Bắc.</li></ul><p><br></p><ol><li class="ql-align-justify"><strong>CÁCH THỨC THAM DỰ</strong></li><li class="ql-align-justify">Người tham gia gửi đăng ký và gửi ảnh theo đường link google form:&nbsp;<a href="https://forms.gle/KumRQ95pqXmhXnJB9" rel="noopener noreferrer" target="_blank" style="color: rgb(30, 136, 229);">https://forms.gle/KumRQ95pqXmhXnJB9</a></li><li class="ql-align-justify">Bài dự thi bao gồm:</li></ol><ul><li class="ql-align-justify">ảnh tự chụp chia sẻ các khoảnh khắc đời thường hay check in tại các địa điểm nổi bật tại Thành phố Hồ Chí Minh hoặc Hà Nội.</li><li class="ql-align-justify">đoạn giới thiệu ngắn về nội dung và cảm nhận khi chụp ảnh với địa điểm có trong hình.</li></ul><p><br></p><p class="ql-align-justify">LƯU Ý: phần ảnh tự chụp chưa từng tham gia bất kì cuộc thi nào khác. Ban tổ chức không chấp nhận ảnh có chất lượng quá thấp hay được chỉnh sửa quá nhiều.</p><p><br></p><ol><li class="ql-align-justify"><strong>TIMELINE CUỘC THI</strong></li></ol><ul><li class="ql-align-justify">Chặng 1: Mở đơn tham gia sự kiện chính (01/06/2022).</li><li class="ql-align-justify">Chặng 2: Đóng đơn tham gia sự kiện chính (06/06/2022).</li><li class="ql-align-justify">Chặng 3: Mở cổng tham gia bình chọn online (07/06/2022).</li><li class="ql-align-justify">Chặng 4: Thông báo top 5 chung cuộc (08/06/2022).</li><li class="ql-align-justify">Chặng 5: Thông báo top 3 chung cuộc&nbsp;(09/06/2022).</li></ul><p><br></p><ol><li class="ql-align-justify"><strong>QUY CHẾ CHẤM GIẢI</strong></li><li class="ql-align-justify">Gồm có 2 phần điểm chính:</li></ol><ul><li class="ql-align-justify">50% số điểm là điểm đánh giá từ BTC.</li><li class="ql-align-justify">50% còn lại tính theo lượng tương tác của bài đăng dự thi đó trên Fanpage dự án.</li><li class="ql-align-justify"><br></li></ul><ol><li class="ql-align-justify"><strong>CƠ CẤU GIẢI THƯỞNG</strong></li></ol><p class="ql-align-justify">&nbsp;Phần thưởng bao gồm certificate chứng nhận và voucher/khoá học từ nhà tài trợ.</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">Để cuộc thi diễn ra thành công tốt đẹp, Vị rất mong chờ sự ủng hộ nhiệt tình của tất cả mọi người. Chúng mình rất mong chờ được nghe ý kiến của bạn đó, vậy nên bạn đừng chần chừ mà hãy tỏa sáng cùng Vị nhé!</p><p class="ql-align-justify">___________________________________________________________________</p><p class="ql-align-justify">Contact us:</p><p class="ql-align-justify"><img src="https://lh3.googleusercontent.com/5N5h4h3CcMsHkAqt0tUFw5LY0C5XvIYTUBL3Dy17n1jfYBKOHlVEBzojqbXxIyA_0Q63MSGcLK76xTuU0-GNGN5Np1Gx5eSbjteoCZvnp2XA30hvSy2_oBK42r0l33z0IRWSraP7wYeuqvnj6Q" alt="📪" height="16" width="16">Fanpage:<a href="https://www.facebook.com/viproject2021?__cft__%5B0%5D=AZUJmhJ779Vlnzh98Gx7ocMNXz-BE20YceOAuQPUszVI0Tl5bLy6EY_0WVhP_r6B7wHY6zXkKDNO5seViAtjDbGGQpngB7ygeydyj-N0KDcDNdIviWsxZtulB4vSeLNZoQomQN7vj4Q8ipAc826639xi&amp;__tn__=-UK-R" rel="noopener noreferrer" target="_blank" style="color: rgb(30, 136, 229);">&nbsp;https://www.facebook.com/viproject2021</a></p><p class="ql-align-justify"><img src="https://lh5.googleusercontent.com/3woF-3P5dJvN8caocB4nkWF8HpMfRt6GmHQgZ1W1UVKpr7-y5DfAN0PJLSg7eCebNBDnCAkbhHY3JZs-eHqaKH7-CsFNrOMXu2UxOTVRYkC3YQZhiWUpNe3o6_GJzHxKF-OxZZoyz97FV__zDQ" alt="📟" height="16" width="16">&nbsp;Spotify:<a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2Fvivucungvi%3Ffbclid%3DIwAR1VdAgJzb-2gGkkQ9WB7z3-V4huS_bPqNReKhh-6-HIiFKJoxO5MsYNe0M&amp;h=AT0FN2NFGD-zP2Od4ZTxOe3nDo6a9yqZs_FClGK26gMfCjqwLvC0bVn8FnVIS1E-8lUKj-pmT3EQhQYc8KxELMIKkgPLTtEb_bVozHtEeFckOFNHc3sIWw3azwERYP4JlpeAlJERQ5je0ss0pRz5&amp;__tn__=-UK-R&amp;c%5B0%5D=AT21AfOAQfOIzH02rz9jUC5zomOO-B38jEzm7aKf1xnA81JV9Kb_4HyFLnMGHCLjwxvGXEGQqlsln_WlUaWiDr9tJt6zpa3b9rskwBnoMuLhd9XO_d3mDkTLPshHrS40ttnPwnyJF2zdUWD5PH6R5E5rCgpg9MG2kRyL-W37pf0rpw" rel="noopener noreferrer" target="_blank" style="color: rgb(30, 136, 229);">&nbsp;https://bit.ly/vivucungvi</a></p><p class="ql-align-justify"><img src="https://lh4.googleusercontent.com/DaNDaoz_oXP3xyJru02qAbzVHjQrOAf8JgXsZ9oncMRTpDkcN_iv1SLQrX8tO70XBYVOLfaEcS1ql7aoC2JT8bk6e7BXE4GdV-G2DjhgKvoVXZbC-8ju5Oc45TpO1AFJUDOErn-6uoGCSpclKw" alt="📩" height="16" width="16">Email: viproject.10.2021@gmail.com</p><p><br></p>',
  banner: 'https://static.ybox.vn/2022/5/2/1653391238739-280307235_737213660649881_26383321696022981_n.png',
  influencer: [
    { id: 1, name: 'Issac', image: 'http://media.phunutoday.vn/files/quynh.nguyen/2018/04/19/20issac-la-ai-1-phunutodayvn-2351.jpg' },
    { id: 2, name: 'Tóc Tiên', image: 'http://media.phunutoday.vn/files/quynh.nguyen/2018/04/19/20issac-la-ai-1-phunutodayvn-2351.jpg' },
    { id: 3, name: 'Văn Mai Hương', image: 'http://media.phunutoday.vn/files/quynh.nguyen/2018/04/19/20issac-la-ai-1-phunutodayvn-2351.jpg' },
  ],
  number_of_member_join: 23,
  fee: '10000',
  public: 0,
  view: 69,
};

export default function CompetitionDetailPage() {
  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  //toggles collapse between mini sidenav and normal
  const toggleSidenav = () => {
    if (document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.remove('g-sidenav-pinned');
      document.body.classList.add('g-sidenav-hidden');
    } else {
      document.body.classList.add('g-sidenav-pinned');
      document.body.classList.remove('g-sidenav-hidden');
    }
    setSidenavOpen(!sidenavOpen);
  };
  const getNavbarTheme = () => {
    return location.pathname.indexOf('admin/alternative-dashboard') === -1 ? 'dark' : 'light';
  };
  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: '/',
          imgSrc: require('assets/img/brand/Logo text ngang.png').default,
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar theme={getNavbarTheme()} toggleSidenav={toggleSidenav} sidenavOpen={sidenavOpen} brandText={getBrandText(location.pathname)} />
        <CompetitionDetailHeader data={competitionData} />
        <CompetitionDetailBody data={competitionData} />
        <AdminFooter />
      </div>
      {sidenavOpen ? <div className="backdrop d-xl-none" onClick={toggleSidenav} /> : null}
    </>
  );
}
