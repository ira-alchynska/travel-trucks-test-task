import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            bookingDate: '',
            comment: '',
        },
        onSubmit: (values, { resetForm }) => {
            toast.success('Booking request sent successfully!');
            resetForm();
        },
    });

    return (
        <div className={css.bookingFormContainer}>
            <div className={css.formHeader}>
                <h2 className={css.formTitle}>Book your campervan now</h2>
                <p className={css.formSubtitle}>
                    Stay connected! We are always ready to help you.
                </p>
            </div>
            <form onSubmit={formik.handleSubmit} className={css.bookingForm}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={css.inputField}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={css.inputField}
                    required
                />
                <input
                    type="text"
                    name="bookingDate"
                    placeholder="Booking date*"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    onChange={formik.handleChange}
                    value={formik.values.bookingDate}
                    className={css.inputField}
                    required
                />
                <textarea
                    name="comment"
                    placeholder="Comment"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    className={css.textareaField}
                />
                <button type="submit" className={css.submitButton}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
