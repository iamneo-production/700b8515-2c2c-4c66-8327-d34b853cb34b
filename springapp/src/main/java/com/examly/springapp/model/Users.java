import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "mobileno", nullable = false)
    private String mobileNo;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "userRole", nullable = false)
    private String userRole;

    // Getters and setters, constructors
}
