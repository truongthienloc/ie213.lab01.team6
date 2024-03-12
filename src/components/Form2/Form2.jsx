import './Form2.css';
import form2_img from '../../assets/form2-img.jpg';
import { useState } from 'react';

export default function Form2() {
    const [fullname, setFullname] = useState('');
    const [teacher, setTeacher] = useState('');
    const [schoolClass, setSchoolClass] = useState('');
    const [date, setDate] = useState('');
    const [task, setTask] = useState('');
    const [options, setOptions] = useState([]);
    const [isShowResult, setIsShowResult] = useState(false);

    const handleSubmit = () => {
        setIsShowResult(true);
    };

    return (
        <div className="wrapper">
            <div className="form-study">
                <div className="form-study__heading">
                    <h2>THEO DÕI HỌC TẬP</h2>
                </div>
                <div className="form-study__body">
                    <div className="form-study__body--container">
                        <div className="form-study__body--left">
                            <div className="form-study__form-control">
                                <label htmlFor="studentName">Họ tên học sinh : </label>
                                <input
                                    type="text"
                                    id="studentName"
                                    name="studentName"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                />
                            </div>
                            <div className="form-study__form-control">
                                <label htmlFor="teacher">Giáo viên phụ trách : </label>
                                <input
                                    type="text"
                                    id="teacher"
                                    name="teacher"
                                    value={teacher}
                                    onChange={(e) => setTeacher(e.target.value)}
                                />
                            </div>
                            <div className="form-study__form-control">
                                <div className="form-study__form-control--half">
                                    <label htmlFor="class">Lớp : </label>
                                    <input
                                        type="text"
                                        id="class"
                                        name="class"
                                        value={schoolClass}
                                        onChange={(e) => setSchoolClass(e.target.value)}
                                    />
                                </div>
                                <div className="form-study__form-control--half">
                                    <label htmlFor="Date">Ngày : </label>
                                    <input
                                        type="date"
                                        id="Date"
                                        name="Date"
                                        value={date}
                                        onChange={(e) => {
                                            let date = e.target.value;
                                            date = date.split('-').reverse().join('/');
                                            console.log(date);
                                            setDate(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-study__form-control--textarea">
                                <label htmlFor="task">Những việc phân công chưa làm: </label>
                                <textarea
                                    name="task"
                                    id="task"
                                    cols="20"
                                    rows="10"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-study__body--right">
                            <img src={form2_img} alt="" />
                        </div>
                    </div>

                    <div className="form-study__form-control--checkbox">
                        <p htmlFor="">Chọn hình thức hoàn thành: </p>
                        <div className="form-study__form-control--checkbox__item">
                            <input
                                type="checkbox"
                                name="firstCheckbox"
                                id="firstCheckbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setOptions([...options, 'tại lớp']);
                                    } else {
                                        setOptions(
                                            options.filter((option) => option !== 'tại lớp'),
                                        );
                                    }
                                }}
                            />
                            <label htmlFor="firstCheckbox">
                                Những việc chưa làm sẽ được hoàn thành ngay tại lớp
                            </label>
                        </div>
                        <div className="form-study__form-control--checkbox__item">
                            <input
                                type="checkbox"
                                name="secondCheckbox"
                                id="secondCheckbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setOptions([...options, 'tại nhà']);
                                    } else {
                                        setOptions(
                                            options.filter((option) => option !== 'tại nhà'),
                                        );
                                    }
                                }}
                            />
                            <label htmlFor="secondCheckbox">
                                Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại giáo viên vào
                                ngày hôm sau
                            </label>
                        </div>
                    </div>

                    <div className="form-study__submit">
                        <button type="submit" onClick={handleSubmit}>
                            Ghi nhận
                        </button>
                    </div>
                </div>
            </div>

            {isShowResult &&
                <div className='result'>
                    <h2>Thông tin phiếu theo dõi</h2>
                    <p>Tên học sinh: {fullname} - Lớp: {schoolClass}</p>
                    <p>Ngày đăng ký: {date.replace('-', '/')} - Giáo viên phụ trách: {teacher}</p>
                    <p>Những công việc đã được phân công nhưng chưa hoàn thành: </p>
                    <p>{task}</p>
                    <p>Cam kết sẽ hoàn thành tại: {options.join(" - ")}</p>
                </div>
            }
        </div>
    );
}
